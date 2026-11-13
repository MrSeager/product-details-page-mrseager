'use client';
//Components
import { useState } from "react";
import Link from "next/link";
import RatingStar from "./RatingStar";
//Data
import productDataJson from "@/src/data/productData.json";

type ProductData = typeof productDataJson;

interface MainComponentProps {
    productData: ProductData ;
}

export default function MainComponent({ productData }: MainComponentProps) {
    const [itemColor, setItemColor] = useState<"green" | "brown">("green");
    const [itemSize, setItemSize] = useState<"xs" | "sm" | "md" | "lg" | "xl">("xs");
    
    return (
        <main className="flex flex-1 w-full flex-col items-center justify-between px-10">
            <div className="max-w-[120rem] grid grid-cols-2 gap-2 py-10 px-5 bg-white shadow-md rounded-md">
                <div>

                </div>
                <div className="flex flex-col items-start gap-4">
                    <h1 className="text-base/15 text-[50px] text-black font-semibold">{productData[0].name}</h1>
                    {productData[0].color[itemColor].sizes[itemSize].discount === null ?
                        <h2 className="text-base/7 text-[35px] text-black/75">${productData[0].color[itemColor].sizes[itemSize].list_price}</h2>
                        :
                        <div className="flex gap-2 items-end font-semibold">
                            <h2 className="text-base/7 text-[35px] text-black/75">${productData[0].color[itemColor].sizes[itemSize].sale_price}</h2>
                            <h2 className="text-base/4 text-[20px] line-through">${productData[0].color[itemColor].sizes[itemSize].list_price}</h2>
                        </div>
                    }
                    {productData[0].color[itemColor].sizes[itemSize].discount === null ?
                        '' :
                        <div className="text-amber-700 border border-2 border-yellow-300 bg-amber-50 py-1 px-3 rounded-full">
                            {productData[0].color[itemColor].sizes[itemSize].discount_percentage}% OFF
                        </div>
                    }
                    <div className="flex gap-3 items-center">
                        <h2 className="text-[30px] font-semibold text-black/75">{productData[0].rating}</h2>
                        <div className="flex gap-1">
                            <RatingStar 
                                starNumb={1}
                                rating={productData[0].rating}
                            />
                            <RatingStar 
                                starNumb={2}
                                rating={productData[0].rating}
                            />
                            <RatingStar 
                                starNumb={3}
                                rating={productData[0].rating}
                            />
                            <RatingStar 
                                starNumb={4}
                                rating={productData[0].rating}
                            />
                            <RatingStar 
                                starNumb={5}
                                rating={productData[0].rating}
                            />
                        </div>
                        {productData[0].reviewsAmount !== 0 ?
                            <Link
                                href={'/'}
                                className="duration-300 text-indigo-700 hover:scale-105"
                            >
                                {productData[0].reviewsAmount < 2 ? 'See 1 review' : `See all ${productData[0].reviewsAmount} reviews`}
                            </Link>
                            : ''
                        }                       
                    </div>
                    <p>{productData[0].description_0}</p>
                    <div className="flex flex-col gap-3">
                        <h2 className="text-sm">Available Colors</h2>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}