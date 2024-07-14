"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getAnalysisData } from '@/services/analysis';
import Analysis from '@/models/analysis';


export default function NutritionalAnalysis({ params }: { params: { id: string } }) {
    const [data, setData] = useState({} as Analysis);

    useEffect(() => {
        getAnalysisData(params.id)
            .then((data) => setData(data as Analysis))
    }, [params.id]);

    return (
        <main className=" bg-background-light min-h-screen">
            <div className="sm:block md:flex md:items-start">
                <div className="mb-7">
                    <Link href="/" className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-white bg-primary hover:bg-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:cursor-pointer">
                        <svg className="-ml-0.5 mr-1.5 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M12.25 16.75a.75.75 0 01-.53-.22l-7-7a.75.75 0 010-1.06l7-7a.75.75 0 011.06 1.06L6.56 9.44l6.72 6.72a.75.75 0 01-.53 1.28z" clip-rule="evenodd" />
                        </svg>
                        Home
                    </Link>
                </div>
                {data &&
                    <div className="md:grid md:grid-cols-2 md:grid-flow-col items-center text-text-default md:px-48">
                        <div className="md:row-span-2 w-fit items-center my-10 md:my-0">
                            <Image className="object-cover"
                                src={data.imageBase64}
                                alt="Image of the cooked meal"
                                width={320}
                                height={320}
                            ></Image>
                        </div>
                        <div className="md:col-start-2 md:row-start-1 item-center">
                            <h1 className="text-2xl text-center md:text-left md:text-4xl font-bold text-primary-dark mb-2">{data.name_of_dish}</h1>
                            <h6 className="text-md text-secondary-default"><b>Energy:</b> {data.energy?.calories} Kcal / {data.energy?.kilojoules} Kj</h6>
                            <div className="">
                                <h2 className="text-lg uppercase font-bold text-primary-light mt-5 mb-1"> Nutritional Values</h2>
                                <ul>
                                    {data.nutritional_values?.map((value, index) => (
                                        <li key={index}>{value.name}: {value.amount}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="">
                                <h2 className="text-lg uppercase font-bold text-primary-light mt-5 mb-1">Ingredients</h2>
                                <ul>
                                    {data.ingredients?.map((ingredient, index) => (
                                        <li key={index}>{ingredient.ingredient_name}: {ingredient.weight}</li>
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