import HowItWorks from "@/components/howItWorks";
import UploadImage from "@/components/uploadImage";

export default function Home() {
  return (
    <main className="bg-background-light min-h-screen">
      <div className="flex flex-col  text-text-default">
        <h1 className="text-4xl font-bold text-primary-dark mb-2">Welcome to FINO,</h1>
        <h6 className="text-lg text-secondary-default indent-6">Your food nutritional analysis tool!</h6>
      </div>
      <UploadImage></UploadImage>
      <HowItWorks></HowItWorks>
      <div className="flex flex-col pl-24 pr-24">
        <h1 className="text-4xl indent-[30%]">Give it a try!</h1>
        <UploadImage></UploadImage>
      </div>
    </main>
  );
}
