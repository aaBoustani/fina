import HowItWorks from "@/components/howItWorks";
import UploadImage from "@/components/uploadImage";

export default function Home() {
  return (
    <main className="bg-background-light min-h-screen">
      <div className="md:flex md:flex-col  text-text-default">
        <h1 className="text-4xl font-bold text-primary-dark mb-2">Welcome to FINO,</h1>
        <h6 className="text-lg text-secondary-default md:indent-6">Your food nutritional analysis tool!</h6>
      </div>
      <div className="my-10 flex flex-col md:px-24">
        <div className="md:pl-[10%]">
          <UploadImage></UploadImage>
        </div>
      </div>
      <HowItWorks></HowItWorks>
      <div className="flex flex-col md:indent-[30%] md:px-24">
        <h1 className="text-3xl md:text-4xl mt-10 md:mt-0">Give it a try!</h1>
        <div className="md:ml-[10%]">
          <UploadImage></UploadImage>
        </div>
      </div>
    </main>
  );
}