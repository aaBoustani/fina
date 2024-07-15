"use client";
import HowItWorks from "@/components/howItWorks";
import UploadImage from "@/components/uploadImage";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <main className="bg-background-light min-h-screen text-text">
      <div className="md:flex md:flex-col  text-text-default">
        <h1 className="text-4xl font-bold text-primary-dark mb-2">Welcome to FINA,</h1>
        <h6 className="text-lg text-secondary-default md:indent-6">Your food nutritional analysis tool!</h6>
      </div>
      <div className="my-10 flex flex-col md:px-10px md:my-10 lg:px-24 lg:w-[1000px] md:w-[750px]">
        <div className="md:items-center mx-auto">
          <UploadImage isLoading={isLoading} setIsLoading={setIsLoading}></UploadImage>
        </div>
      </div>
      <div className="flex flex-col md:px-10px md:my-10 lg:px-24 lg:w-[1000px] md:w-[750px]">
        <h1 className="text-3xl md:text-4xl mt-10 md:items-center md:mt-0 text-primary mx-auto">How It Works</h1>
        <HowItWorks></HowItWorks>
      </div>
      <div className="my-10 flex flex-col md:px-10px md:my-10 lg:px-24 lg:w-[1000px] md:w-[750px]">
        <h1 className="text-3xl md:text-4xl mt-10 md:items-center md:mt-0 text-primary mx-auto">Try It Now!</h1>
        <div className="md:items-center mx-auto">
          <UploadImage isLoading={isLoading} setIsLoading={setIsLoading}></UploadImage>
        </div>
      </div>
    </main>
  );
}