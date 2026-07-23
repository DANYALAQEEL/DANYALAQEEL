# Copyright (c) 2020 PaddlePaddle Authors. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
import os
import sys
import subprocess
import csv
from datetime import datetime


__dir__ = os.path.dirname(os.path.abspath(__file__))
sys.path.append(__dir__)
sys.path.insert(0, os.path.abspath(os.path.join(__dir__, '../..')))

os.environ["FLAGS_allocator_strategy"] = 'auto_growth'

import cv2
import copy
import numpy as np
import json
import time
import logging
from PIL import Image
import tools.infer.utility as utility
import tools.infer.predict_rec as predict_rec
import tools.infer.predict_det as predict_det
import tools.infer.predict_cls as predict_cls
from ppocr.utils.utility import get_image_file_list, check_and_read
from ppocr.utils.logging import get_logger
from tools.infer.utility import draw_ocr_box_txt, get_rotate_crop_image, get_minarea_rect_crop
import psycopg2

logger = get_logger()





import os
import sys
import subprocess
import csv
from datetime import datetime
import cv2
import numpy as np
import json
import time
import logging
import psycopg2
import base64

def encode_image(image):
    """Encode the image into a base64 string."""
    _, buffer = cv2.imencode('.jpg', image)  # You can change the format as needed
    encoded_image = base64.b64encode(buffer)
    # print(encoded_image)
    return encoded_image

def insert_data_into_detections_table(time, data, encoded_image, lane):
    try:
        # Connect to the PostgreSQL database
        conn = psycopg2.connect(
            dbname="anpr",
            user="postgres",
            password="embedaiot123",
            host="localhost",
            port="5432"
        )
        cursor = conn.cursor()
        sql = "INSERT INTO detections (time, data, image_data, lane) VALUES (%s, %s, %s, %s)"
        cursor.execute(sql, (time, data, encoded_image, lane))
        conn.commit()
    except (Exception, psycopg2.Error) as error:
        print("Error while connecting to PostgreSQL:", error)
    finally:
        if conn:
            cursor.close()
            conn.close()

class TextSystem(object):
    def __init__(self, args):
        if not args.show_log:
            logger.setLevel(logging.INFO)

        self.text_detector = predict_det.TextDetector(args)
        self.text_recognizer = predict_rec.TextRecognizer(args)
        self.use_angle_cls = args.use_angle_cls
        self.drop_score = args.drop_score
        if self.use_angle_cls:
            self.text_classifier = predict_cls.TextClassifier(args)

        self.args = args
        self.crop_image_res_index = 0

    def draw_crop_rec_res(self, output_dir, img_crop_list, rec_res):
        os.makedirs(output_dir, exist_ok=True)
        bbox_num = len(img_crop_list)
        for bno in range(bbox_num):
            cv2.imwrite(
                os.path.join(output_dir,
                             f"mg_crop_{bno+self.crop_image_res_index}.jpg"),
                img_crop_list[bno])
            logger.debug(f"{bno}, {rec_res[bno]}")
        self.crop_image_res_index += bbox_num

    def __call__(self, img, cls=True):
        time_dict = {'det': 0, 'rec': 0, 'cls': 0, 'all': 0}

        if img is None:
            logger.debug("no valid image provided")
            return None, None, time_dict

        start = time.time()
        ori_im = img.copy()
        dt_boxes_list, elapse = self.text_detector(img)
        time_dict['det'] = elapse

        # if dt_boxes is None:
        #     logger.debug("no dt_boxes found, elapsed : {}".format(elapse))
        #     end = time.time()
        #     time_dict['all'] = end - start
        #     return None, None, time_dict
        # else:
        #     logger.debug("dt_boxes num : {}, elapsed : {}".format(
        #         len(dt_boxes), elapse))
        img_crop_list = []
        dt_boxes_count = []
        for ind, dt_boxes in enumerate(dt_boxes_list):
            dt_boxes = sorted_boxes(dt_boxes)
            dt_boxes_count.append(len(dt_boxes))

            for bno in range(len(dt_boxes)):
                tmp_box = copy.deepcopy(dt_boxes[bno])
                if self.args.det_box_type == "quad":
                    img_crop = get_rotate_crop_image(ori_im[ind], tmp_box)
                else:
                    img_crop = get_minarea_rect_crop(ori_im[ind], tmp_box)
                img_crop_list.append(img_crop)
            if self.use_angle_cls and cls:
                img_crop_list, angle_list, elapse = self.text_classifier(
                    img_crop_list)
                time_dict['cls'] = elapse
                logger.debug("cls num  : {}, elapsed : {}".format(
                    len(img_crop_list), elapse))

        batch_rec_res, elapse = self.text_recognizer(img_crop_list)
        time_dict['rec'] = elapse
        # logger.debug("rec_res num  : {}, elapsed : {}".format(
        #     len(rec_res), elapse))
        # if self.args.save_crop_res:
        #     self.draw_crop_rec_res(self.args.crop_res_save_dir, img_crop_list,
        #                            rec_res)
        i=0
        batch_filter_boxes = []
        batch_filter_rec_res = []
        for ind, dt_boxes in enumerate(dt_boxes_list):
            dt_boxes = sorted_boxes(dt_boxes)
            rec_res = batch_rec_res[i:len(dt_boxes)+i]
            i += len(dt_boxes)

            filter_boxes, filter_rec_res = [], []
            for box, rec_result in zip(dt_boxes, rec_res):
                text, score = rec_result
                if score >= self.drop_score:
                    filter_boxes.append(box)
                    filter_rec_res.append(rec_result)

            batch_filter_boxes.append(filter_boxes)
            batch_filter_rec_res.append(filter_rec_res)
        end = time.time()
        time_dict['all'] = end - start
        return batch_filter_boxes, batch_filter_rec_res, time_dict


def sorted_boxes(dt_boxes):
    """
    Sort text boxes in order from top to bottom, left to right
    args:
        dt_boxes(array):detected text boxes with shape [4, 2]
    return:
        sorted boxes(array) with shape [4, 2]
    """
    num_boxes = dt_boxes.shape[0]
    sorted_boxes = sorted(dt_boxes, key=lambda x: (x[0][1], x[0][0]))
    _boxes = list(sorted_boxes)

    for i in range(num_boxes - 1):
        for j in range(i, -1, -1):
            if abs(_boxes[j + 1][0][1] - _boxes[j][0][1]) < 10 and \
                    (_boxes[j + 1][0][0] < _boxes[j][0][0]):
                tmp = _boxes[j]
                _boxes[j] = _boxes[j + 1]
                _boxes[j + 1] = tmp
            else:
                break
    return _boxes

lane = 'rfid2'
def main(args, vid_path):

    save_video_filename = 'video_output_updated.mp4'
    csv_filename = 'detections_with_bbox.csv'


    # image_file_list = get_image_file_list(args.image_dir)
    # image_file_list = image_file_list[args.process_id::args.total_process_num]
    text_sys = TextSystem(args)
    is_visualize = True
    font_path = args.vis_font_path
    drop_score = args.drop_score
    draw_img_save_dir = args.draw_img_save_dir
    os.makedirs(draw_img_save_dir, exist_ok=True)
    save_results = []
    if lane == 'rfid':
    # cap = cv2.VideoCapture(vid_path)
        cap = cv2.VideoCapture('rtsp://admin:NUST12345@10.1.15.62')
    elif lane == 'rfid2':
        cap = cv2.VideoCapture('rtsp://admin:NUST12345@10.1.15.61')
    else:
        cap = cv2.VideoCapture('rtsp://admin:NUST12345@10.1.15.63')

    if cap.isOpened():
        ret, img = cap.read()
        # x1, y1 = 750, 400
        # x2, y2 = 950, 600
        if lane == 'rfid':
            x1, y1 = 750, 400
            x2, y2 = 950, 600   
        elif lane == 'rfid2':
            x1, y1 = 750, 400
            x2, y2 = 950, 600                  
        else:
            x1, y1 = 900, 750
            x2, y2 = 1270, 1250


        # for 63 stream
        # x1, y1 = 900, 750
        # x2, y2 = 1270, 1250

        
        # x1, y1 = 500, 300
        # x2, y2 = 1200, 1250

 	    # x1, y1 = 920, 800
        # x2, y2 = 1170, 1100

        img = img[y1:y2, x1:x2]

# Commented to save some Space
    # fourcc = cv2.VideoWriter_fourcc(*'MP4V')
    # out = cv2.VideoWriter(save_video_filename, fourcc, 20.0, (img.shape[1],img.shape[0]))
    
    logger.info(
        "In PP-OCRv3, rec_image_shape parameter defaults to '3, 48, 320', "
        "if you are using recognition model with PP-OCRv2 or an older version, please set --rec_image_shape='3,32,320"
    )

    # warm up 10 times
    if args.warmup:
        img = np.random.uniform(0, 255, [640, 640, 3]).astype(np.uint8)
        for i in range(10):
            res = text_sys(img)

    total_time = 0
    cpu_mem, gpu_mem, gpu_util = 0, 0, 0
    _st = time.time()
    count = 0
    img_list = []
    skip = 1
    frame_count = 0

    
    while(cap.isOpened()):
        ret, img = cap.read()
        frame_count += 1
        if frame_count % skip == 0:
            if ret:
                starttime = time.time()
                # for 62 stream
                if lane == 'rfid':
                    x1, y1 = 750, 400
                    x2, y2 = 950, 600       
                elif lane == 'rfid2':
                    x1, y1 = 750, 400
                    x2, y2 = 950, 600                  
                else:
                    x1, y1 = 900, 750
                    x2, y2 = 1270, 1250


                timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
                # dt_boxes, rec_res, time_dict = text_sys(img_list)
                

                # for 63 stream
                # x1, y1 = 900, 750
                # x2, y2 = 1270, 1250

                img = img[y1:y2, x1:x2]
                #img = img[::2, ::2]

                # img = img[int(img.shape[0]/2)::, int(img.shape[1]/2)::, :]

                M = np.array([  [ 4.49465455e-01,  1.44709611e-01,  1.07481496e+02],
                                [ 3.92331699e-02,  9.02858202e-01, -2.01339772e+01],
                                [-3.79801137e-04,  2.91676074e-05,  1.00000000e+00]])

                cardW = 150
                cardH = 80

                offsetSize = 100
                transformed = np.zeros((int(cardW + offsetSize), int(cardH + offsetSize)), dtype=np.uint8);
                # img = cv2.warpPerspective(img, M, transformed.shape)

                # filter = np.array([[-2, 1, -1], [1, 3, 1], [-1, 1, -2]])
                # img = cv2.filter2D(img, -1, filter)

                img_list.append(img)
                timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

                if len(img_list) == 1:
                    dt_boxes, rec_res, time_dict = text_sys(img_list)
                    # print("------------------------")
                    for k, (boxes, res) in enumerate(zip(dt_boxes, rec_res)):
                        if len(res) > 0:
                            timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
                            encoded_img = encode_image(img)  # Assuming `img` is the current frame
                            # print(encode_image)
                            insert_data_into_detections_table(timestamp, str(res), str(encoded_img), str(lane))
                            print(timestamp, " ", res)
                            data = {
                                "Timestamp": timestamp
                                }
                            # insert_data_into_detections_table(timestamp, str(res))

                            for j in range(5):
                                dt_key = "dt-%i"%(j+1)
                                res_key = "res-%i"%(j+1)
                                data[dt_key] = ""
                                data[res_key] = ""

                            for j, (box, r ) in enumerate(zip(boxes, res)):
                                if j < 5:
                                    dt_key = "dt-%i"%(j+1)
                                    res_key = "res-%i"%(j+1)
                                    data[dt_key] = box
                                    data[res_key] = r

                            with open(csv_filename, 'a', newline='') as csvfile:
                                    
                                fieldnames = [
                                    'Timestamp',
                                    'dt-1',
                                    'dt-2',
                                    'dt-3',
                                    'dt-4',
                                    'dt-5',
                                    'res-1',
                                    'res-2',
                                    'res-3',
                                    'res-4',
                                    'res-5',
                                    ]
                                # writer = csv.DictWriter(csvfile, fieldnames=fieldnames)      Disabled to save some Space
                                
                                # if not os.path.exists(csv_filename):
                                #     writer.writeheader()  # Write header if file doesn't exist
                                # writer.writerow(data)
                    #print(rec_res)
                            


                    img_list = []
                    # print(time_dict)

        #             image = Image.fromarray(cv2.cvtColor(img, cv2.COLOR_BGR2RGB))
        #             boxes = dt_boxes
        #             txts = [rec_res[i][0] for i in range(len(rec_res))]
        #             scores = [rec_res[i][1] for i in range(len(rec_res))]
        #
        #             draw_img = draw_ocr_box_txt(
        #                 image,
        #                 boxes,
        #                 txts,
        #                 scores,
        #                 drop_score=drop_score,
        #                 font_path=font_path)
        #
        #             draw_img = draw_img[:, :, ::-1]
                font                   = cv2.FONT_HERSHEY_SIMPLEX
                bottomLeftCornerOfText = (15, 12)
                fontScale              = .4
                fontColor              = (0,0,0)
                thickness              = 1
                lineType               = 2

                cv2.putText(img, str(timestamp), 
                bottomLeftCornerOfText, 
                font, 
                fontScale,
                fontColor,
                thickness,
                lineType)
                #cv2.imshow('frame', img)
                # out.write(img)       #Commented to save some space

                #key = cv2.waitKey(10)
        #
        #             # cv2.imwrite('imggg.png', img)
        #
                #if key == ord('q'):
                    #break
    #
    # cap.release()
    # cv2.destroyAllWindows()

    # for idx, image_file in enumerate(image_file_list):
    #
    #     img, flag_gif, flag_pdf = check_and_read(image_file)
    #     if not flag_gif and not flag_pdf:
    #         img = cv2.imread(image_file)
    #     if not flag_pdf:
    #         if img is None:
    #             logger.debug("error in loading image:{}".format(image_file))
    #             continue
    #         imgs = [img]
    #     else:
    #         page_num = args.page_num
    #         if page_num > len(img) or page_num == 0:
    #             page_num = len(img)
    #         imgs = img[:page_num]
    #     for index, img in enumerate(imgs):
    #         starttime = time.time()
    #         dt_boxes, rec_res, time_dict = text_sys(img)
    #         elapse = time.time() - starttime
    #         total_time += elapse
    #         if len(imgs) > 1:
    #             logger.debug(
    #                 str(idx) + '_' + str(index) + "  Predict time of %s: %.3fs"
    #                 % (image_file, elapse))
    #         else:
    #             logger.debug(
    #                 str(idx) + "  Predict time of %s: %.3fs" % (image_file,
    #                                                             elapse))
    #         for text, score in rec_res:
    #             logger.debug("{}, {:.3f}".format(text, score))
    #
    #         res = [{
    #             "transcription": rec_res[i][0],
    #             "points": np.array(dt_boxes[i]).astype(np.int32).tolist(),
    #         } for i in range(len(dt_boxes))]
    #         if len(imgs) > 1:
    #             save_pred = os.path.basename(image_file) + '_' + str(
    #                 index) + "\t" + json.dumps(
    #                     res, ensure_ascii=False) + "\n"
    #         else:
    #             save_pred = os.path.basename(image_file) + "\t" + json.dumps(
    #                 res, ensure_ascii=False) + "\n"
    #         save_results.append(save_pred)
    #
    #         if is_visualize:
    #             image = Image.fromarray(cv2.cvtColor(img, cv2.COLOR_BGR2RGB))
    #             boxes = dt_boxes
    #             txts = [rec_res[i][0] for i in range(len(rec_res))]
    #             scores = [rec_res[i][1] for i in range(len(rec_res))]
    #
    #             draw_img = draw_ocr_box_txt(
    #                 image,
    #                 boxes,
    #                 txts,
    #                 scores,
    #                 drop_score=drop_score,
    #                 font_path=font_path)
    #             if flag_gif:
    #                 save_file = image_file[:-3] + "png"
    #             elif flag_pdf:
    #                 save_file = image_file.replace('.pdf',
    #                                                '_' + str(index) + '.png')
    #             else:
    #                 save_file = image_file
    #             cv2.imwrite(
    #                 os.path.join(draw_img_save_dir,
    #                              os.path.basename(save_file)),
    #                 draw_img[:, :, ::-1])
    #             logger.debug("The visualized image saved in {}".format(
    #                 os.path.join(draw_img_save_dir, os.path.basename(
    #                     save_file))))
    #
    # logger.info("The predict total time is {}".format(time.time() - _st))
    # if args.benchmark:
    #     text_sys.text_d etector.autolog.report()
    #     text_sys.text_recognizer.autolog.report()
    #
    # with open(
    #         os.path.join(draw_img_save_dir, "system_results.txt"),
    #         'w',
    #         encoding='utf-8') as f:
    #     f.writelines(save_results)


if __name__ == "__main__":
    vid_path = "../C3 - Trim.mp4"
    args = utility.parse_args()
    if args.use_mp:
        p_list = []
        total_process_num = args.total_process_num
        for process_id in range(total_process_num):
            cmd = [sys.executable, "-u"] + sys.argv + [
                "--process_id={}".format(process_id),
                "--use_mp={}".format(False)
            ]
            p = subprocess.Popen(cmd, stdout=sys.stdout, stderr=sys.stdout)
            p_list.append(p)
        for p in p_list:
            p.wait()
    else:
        main(args, vid_path)

