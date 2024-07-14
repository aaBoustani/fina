"use client";

import { useState, ChangeEvent, useRef } from 'react';
import { isMobile } from 'react-device-detect';
import { useRouter } from 'next/navigation';
import SvgIcon from './svgIcon';
import { uploadImage } from '@/services/upload';

export default function UploadImage(): JSX.Element {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const router = useRouter();

    const handleUploadButtonClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setIsLoading(true);
            uploadImage(event.target.files[0])
                .then(data => router.push(`/analysis/${data.id}`))
                .finally(() => setIsLoading(false));
        }
    };

    return (
        <div className="flex items-center md:space-x-6 md:pb-6 md:pt-16 md:px-60">
            <div>
                <button
                    type="button"
                    onClick={handleUploadButtonClick}
                    disabled={isLoading}
                    className="flex md:px-4 md:py-2 text-xs my-4 py-1 px-2 items-center text-white bg-primary rounded disabled:bg-primary-light hover:bg-primary-light"
                >
                    {!isLoading &&
                        <span className="flex items-center justify-between gap-2">
                            <SvgIcon svgFilename="salad.svg" width="24px" height="24px" />
                            Upload a picture of your food
                        </span>}
                    {isLoading &&
                        <span className="flex items-center">
                            <svg className="animate-spin h-6 w-6 mr-3 text-white -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"></svg>
                            Uploading...
                        </span>}
                </button>
                <input
                    type="file"
                    accept="image/*"
                    capture={isMobile ? 'environment' : undefined}
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                />
            </div>
        </div>
    );
};