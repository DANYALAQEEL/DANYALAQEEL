import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import CameraForm from '@/components/Camera/CameraForm';
import React, { useState } from 'react';

const AddCameraPage: React.FC = () => {

    return (
        <div className="space-y-6">
            <Breadcrumb pageName='Add Camera' />
            <CameraForm />
        </div>
    );
};

export default AddCameraPage;