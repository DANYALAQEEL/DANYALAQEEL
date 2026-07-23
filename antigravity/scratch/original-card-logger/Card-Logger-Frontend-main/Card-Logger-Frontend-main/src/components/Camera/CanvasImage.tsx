// components/CanvasImage.js
import { useEffect, useRef, useState } from "react";

const CanvasImage = ({
  response,
  reload,
  onRectangleDrawn,
}: {
  response: string;
  reload: boolean;
  onRectangleDrawn?: (data: {
    startPoint: { x: number; y: number };
    endPoint: { x: number; y: number };
    canvasSize: { width: number; height: number };
  }) => void;
}) => {
  const canvasRef = useRef({} as HTMLCanvasElement | null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [startPoint, setStartPoint] = useState({ x: 0, y: 0 });
  const [endPoint, setEndPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const loadImage = async () => {
      const canvas = canvasRef.current as HTMLCanvasElement | null;
      if (canvas) {
        const ctx = (canvasRef.current as HTMLCanvasElement | null)?.getContext(
          "2d",
        ) as CanvasRenderingContext2D | null;

        // Adjust canvas size to match the parent div
        if (canvas.parentElement && ctx) {
          canvas.width = canvas.parentElement.clientWidth;
          canvas.height = canvas.parentElement.clientHeight;
          if (ctx) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
          }
        }

        const image = new Image();
        image.src = response;
        image.onload = () => {
          if (ctx && canvas) {
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
          }
        };
      }

      setStartPoint({ x: 0, y: 0 });
      setEndPoint({ x: 0, y: 0 });
    };

    loadImage();
  }, [response, reload]);

  const handleMouseDown = (e: { clientX: number; clientY: number }) => {
    const rect = (
      canvasRef.current as HTMLCanvasElement | null
    )?.getBoundingClientRect();
    if (rect) {
      console.log(rect);
      setStartPoint({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
    setIsDrawing(true);
    handleMouseMove(e);
  };

  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    if (!isDrawing) return;
    const rect = (
      canvasRef.current as HTMLCanvasElement | null
    )?.getBoundingClientRect();
    if (rect) {
      setEndPoint({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
    // drawBoundingBox();
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
    drawBoundingBox();
    if (onRectangleDrawn) {
      // return the coordinates of the bounding box and the canvas size
      const canvas = canvasRef.current as HTMLCanvasElement | null;
      if (canvas) {
        onRectangleDrawn({
          startPoint,
          endPoint,
          canvasSize: { width: canvas.width, height: canvas.height },
        });
      }
    }
  };

  const drawBoundingBox = () => {
    const canvas = canvasRef.current;
    const ctx = (canvasRef.current as HTMLCanvasElement | null)!.getContext(
      "2d",
    ) as CanvasRenderingContext2D | null;

    if (!ctx) return;
    if (!canvas) return;

    // Clear and redraw the image
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const image = new Image();
    image.src = response;
    image.onload = () => {
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

      // Draw the bounding box
      ctx.strokeStyle = "red";
      ctx.lineWidth = 2;
      ctx.strokeRect(
        startPoint.x,
        startPoint.y,
        endPoint.x - startPoint.x,
        endPoint.y - startPoint.y,
      );
    };

    // console.log(startPoint, endPoint);
  };

  return (
    <div className="grid place-items-center [grid-template-areas:'stack']">
      <img
        src={response}
        alt="Image"
        className="invisible h-full w-full [grid-area:stack]"
      />
      <canvas
        ref={canvasRef}
        className="h-full w-full cursor-crosshair border border-stroke [grid-area:stack] dark:border-strokedark"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      ></canvas>
    </div>
  );
};

export default CanvasImage;
