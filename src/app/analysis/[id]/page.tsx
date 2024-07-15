"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getUploadWithAnalysis } from '@/services';
import { Upload } from '@/models';


export default function NutritionalAnalysis({ params }: { params: { id: string } }) {
    const [data, setData] = useState({} as Upload);

    useEffect(() => {
        getUploadWithAnalysis(params.id)
            .then((data: Upload) => setData(data))
    }, [params.id]);

    return (
        <main className=" bg-background-light min-h-screen">
            <div className="sm:block md:flex md:flex-col md:items-start ">
                <div className="mb-7">
                    <Link href="/" className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-white bg-primary hover:bg-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:cursor-pointer">
                        <svg className="-ml-0.5 mr-1.5 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M12.25 16.75a.75.75 0 01-.53-.22l-7-7a.75.75 0 010-1.06l7-7a.75.75 0 011.06 1.06L6.56 9.44l6.72 6.72a.75.75 0 01-.53 1.28z" clipRule="evenodd" />
                        </svg>
                        Home
                    </Link>
                </div>
                {!!data && !!data.analysis &&
                    <div className="md:grid md:grid-cols-4 md:gap-x-10 items-center text-text-default lg:mx-24 md:w-[600px]">
                        <Image className="object-cover md:row-span-full items-center my-10 md:my-0 md:col-span-2"
                            src={data.image}
                            alt="Image of the cooked meal"
                            width={320}
                            height={320}
                        ></Image>
                        <div className="md:col-span-2 item-center">
                            <h1 className="text-3xl text-left md:text-4xl font-bold text-primary-dark mb-2">{data.analysis?.dishName}</h1>
                            <h6 className="text-md text-secondary-default"><b>Energy:</b> {data.analysis?.energy?.calories} Cal / {data.analysis?.energy?.kilojoules} Kj</h6>
                            <div className="">
                                <h2 className="text-lg uppercase font-bold text-primary-light mt-5 mb-1"> Nutritional Values</h2>
                                <ul>
                                    {data.analysis?.nutritionalValues?.map((value, index) => (
                                        <li key={index}>{value.name}: {value.amount}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="">
                                <h2 className="text-lg uppercase font-bold text-primary-light mt-5 mb-1">Ingredients</h2>
                                <ul>
                                    {data.analysis?.ingredients?.map((ingredient, index) => (
                                        <li key={index}>{ingredient.name}: {ingredient.weight}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </main >
    );
}