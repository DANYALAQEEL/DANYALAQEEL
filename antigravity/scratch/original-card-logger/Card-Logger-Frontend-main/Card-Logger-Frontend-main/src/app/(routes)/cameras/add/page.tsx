import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import CameraForm from '@/components/Camera/CameraForm';
import React, { useState } from 'react';

const AddCameraPage: React.FC = () => {

    return (
        <DefaultLayout>
            <Breadcrumb pageName='Add Camera' />
            <CameraForm />
        </DefaultLayout>
    );
};

export default AddCameraPage;