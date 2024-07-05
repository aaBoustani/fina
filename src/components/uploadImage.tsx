"use client";

import Image from 'next/image';
import { useState, ChangeEvent, useRef } from 'react';
import { isMobile } from 'react-device-detect';
import SvgIcon from './svgIcon';


export default function UploadImage(): JSX.Element {
    const [file, setFile] = useState<File | null>(null);
    const [image, setImage] = useState<string>("");
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setFile(event.target.files[0]);
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = function () {
                setImage(reader.result?.toString() as string);
            };
        }
    };

    return (
        <div className="flex items-center space-x-6 pb-6 pt-16 px-40">
            <div className="shrink-0 w-16 h-16">
                {file &&
                    <Image
                        className="h-16 w-16 object-cover rounded-full"
                        src={image}
                        alt="Selected photo"
                        width={64}
                        height={64}
                    />
                }
            </div>
            <button
                type="button"
                onClick={handleButtonClick}
                className="flex px-4 py-2 text-white bg-primary rounded hover:bg-primary-light"
            >
                <SvgIcon svgFilename="salad.svg" width="24px" height="24px" />
                Upload a picture of your food
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
    );
};