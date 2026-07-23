"use client";
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import CameraPreviewCard from '@/components/Cards/CameraPreviewCard';
import { NextPage } from 'next';
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getAPIURL } from '@/libs/api';
import Image from 'next/image';

const Page: NextPage = () => {

    const [cameras, setCameras] = useState([]);

    const fetchCameras = async () => {
        try {
            const response = await axios.get("/api/camera/all");
            setCameras(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchCameras();
    }, []);


    return (
        <DefaultLayout>
            <Breadcrumb pageName="All Cameras" />
            <div className="h-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cameras.map((camera: any) => (
                        <CameraPreviewCard
                            key={camera.id}
                            id={camera.id}
                            name={camera.name}
                            url={camera.cam_url}
                            location={camera.location}
                            type={camera.type}
                            fetchCameras={fetchCameras}
                            >
                            <Image
                                src={getAPIURL() + "/api/camera/thumbnail/" + camera.id + "?t=" + new Date().getTime()}
                                width={100}
                                height={100}
                                alt="Camera Thumbnail"
                                className="w-60 sm:w-40 xsm:w-30 2xsm:w-12 transition-all h-auto"
                                
                            />
                            </CameraPreviewCard>
                    ))}
                </div>
            </div>
        </DefaultLayout>
    );
};

export default Page;