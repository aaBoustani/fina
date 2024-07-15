import Image from "next/image";

export default function HowItWorks(): JSX.Element {
    return (
        <div className="flex flex-col">
            <div className="items-center justify-center grid grid-cols-1 gap-y-12 gap-x-8 mt-8  md:w-full md:grid-cols-3 text-wrap">
                <Image className="object-cover"
                    src="/food1.jpeg"
                    alt="Image of a cooked meal"
                    width={320}
                    height={320}
                ></Image>
                <div className="text-align md:col-span-2">
                    <h2 className="text-2xl">Step 1: Take a picture</h2>
                    <p className="text-text-light">Take a picture of your food using your phone or camera.</p>
                </div>
                <Image className="object-cover"
                    src="/food2.jpeg"
                    alt="Image of camera roll on cooked meal"
                    width={320}
                    height={320}
                ></Image>
                <div className="md:col-span-2">
                    <h2 className="text-2xl">Step 2: Upload the picture</h2>
                    <p className="text-text-light">Upload the picture of your food to our website.</p>
                </div>
                <Image className="object-cover"
                    src="/food3.png"
                    alt="Image of a cooked meal"
                    width={320}
                    height={320}
                ></Image>
                <div className="md:col-span-2">
                    <h2 className="text-2xl">Step 3: Get the results</h2>
                    <p className="text-text-light">Get the nutritional analysis of your food in seconds!</p>
                </div>
            </div>
        </div >
    );
};