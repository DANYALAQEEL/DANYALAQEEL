import { getAPIURL, getWSURL } from '@/libs/api';
import React, { useRef, useEffect } from 'react';
import { loadPlayer } from 'rtsp-relay/browser';

const RTSPStream: React.FC<{ cam_id: number }> = (
    { cam_id }
) => {

    const imgClassName =
        cam_id === 47 || cam_id === 48 || cam_id === 49
        ? "w-[500px] h-[125px]"
        : "w-[350px] object-contain";

    return (
        <div className="rounded-sm h-full border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark flex flex-col">
            <h1 className="text-2xl font-bold mb-4">Live Stream</h1>
            <div className="flex justify-center items-center h-full">
                <img src={getAPIURL() + "/api/rtsp-streams/rtsp-stream/" + cam_id} alt='Live Stream' className={imgClassName}/>
            </div>
        </div>
    );
};

export default RTSPStream;