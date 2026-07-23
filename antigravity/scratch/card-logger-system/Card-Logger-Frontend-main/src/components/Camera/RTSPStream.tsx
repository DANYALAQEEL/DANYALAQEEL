import { getAPIURL, getWSURL } from '@/libs/api';
import React, { useRef, useEffect } from 'react';
import { loadPlayer } from 'rtsp-relay/browser';

interface RTSPStreamProps {
  cam_id: number;
  /** Hide the "Live Stream" header — needed when rendering many streams in
      a multi-camera grid, where a repeated header per tile is just noise. */
  showHeader?: boolean;
}

const RTSPStream: React.FC<RTSPStreamProps> = ({ cam_id, showHeader = true }) => {
    // NOTE: previously this component special-cased cam_id 47/48/49 with a
    // different fixed pixel size than every other camera, with no
    // documented reason (likely a one-off debugging hack that got
    // committed). Replaced with a responsive size so it behaves the same
    // for every camera and doesn't break in a multi-stream grid.
    return (
        <div className="flex h-full flex-col rounded-xl bg-cc-bg-panel">
            {showHeader && (
                <h1 className="p-3 text-sm font-semibold text-cc-text-primary">Live Stream</h1>
            )}
            <div className="flex flex-1 items-center justify-center overflow-hidden bg-cc-bg-elevated">
                <img
                    src={getAPIURL() + "/api/rtsp-streams/rtsp-stream/" + cam_id}
                    alt="Live Stream"
                    className="h-full w-full object-contain"
                />
            </div>
        </div>
    );
};

export default RTSPStream;