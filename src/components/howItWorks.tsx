import Image from "next/image";

export default function HowItWorks(): JSX.Element {
    return (
        <div className="flex flex-col md:p-24">
            <h1 className="text-3xl md:text-4xl md:indent-[30%]">How It Works</h1>
            <div className="items-center justify-center grid grid-cols-1 mt-8 md:w-[800px] md:grid-cols-2">
                <Image className="object-cover"
                    src="/food1.jpeg"
                    alt="Image of a cooked meal"
                    width={320}
                    height={320}
                ></Image>
                <div>
                    <h2 className="text-2xl">Step 1: Take a picture</h2>
                    <p>Take a picture of your food using your phone or camera.</p>
                </div>
                <Image className="object-cover"
                    src="/food2.jpeg"
                    alt="Image of camera roll on cooked meal"
                    width={320}
                    height={320}
                ></Image>
                <div>
                    <h2 className="text-2xl">Step 2: Upload the picture</h2>
                    <p>Upload the picture of your food to our website.</p>
                </div>
                <div>
                    <Image className="object-cover"
                        src="/food1.jpeg"
                        alt="Image of a cooked meal"
                        width={320}
                        height={320}
                    ></Image>
                </div>
                <div>
                    <h2 className="text-2xl">Step 3: Get the results</h2>
                    <p>Get the nutritional analysis of your food in seconds!</p>
                </div>
            </div>
        </div >
    );
};