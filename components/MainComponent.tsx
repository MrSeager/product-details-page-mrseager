'use client';
//Components
import { useState } from "react";
import Link from "next/link";
import RatingStar from "./RatingStar";
//Data
import productDataJson from "@/src/data/productData.json";
//Icons
import { FaCheck, FaPlus, FaMinus } from "react-icons/fa6";

type ProductData = typeof productDataJson;

interface MainComponentProps {
    productData: ProductData ;
}

export default function MainComponent({ productData }: MainComponentProps) {
    const [itemColor, setItemColor] = useState<"green" | "brown">("green");
    const [itemSize, setItemSize] = useState<"xs" | "s" | "m" | "l" | "xl">("xs");
    const sizes = ["xs", "s", "m", "l", "xl"] as const;
    const [quantity, setQuantity] = useState<number>(1);
    
    return (
        <main className="flex flex-1 w-full flex-col items-center justify-between px-10">
            <div className="max-w-[120rem] grid grid-cols-2 gap-2 py-10 px-5 bg-white shadow-md rounded-md">
                <div>

                </div>
                <div className="flex flex-col items-start gap-4">
                    <h1 className="text-base/15 text-[50px] text-black font-semibold">{productData[0].name}</h1>
                    {productData[0].color[itemColor].sizes[itemSize].discount === null ?
                        <h2 className="text-base/7 text-[35px] font-semibold text-black/75">${productData[0].color[itemColor].sizes[itemSize].list_price}</h2>
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
                            {[1, 2, 3, 4, 5].map((star) => (
                                <RatingStar
                                key={star}
                                starNumb={star}
                                rating={productData[0].rating}
                                />
                            ))}
                        </div>
                        {productData[0].reviewsAmount !== 0 ?
                            <Link
                                href={'/'}
                                className="duration-300 text-indigo-700 outline-none hover:scale-105 focus:scale-105"
                            >
                                {productData[0].reviewsAmount < 2 ? 'See 1 review' : `See all ${productData[0].reviewsAmount} reviews`}
                            </Link>
                            : ''
                        }                       
                    </div>
                    <p>{productData[0].description_0}</p>
                    <div className="flex flex-col gap-3">
                        <h2 className="text-sm">Available Colors</h2>
                        <div className="flex gap-10">
                            <button 
                                className={`duration-300 cursor-pointer bg-green-500 border-3 outline-blue-700 aspec-1/1 rounded-full p-2 ${itemColor === "green" ? "outline-2 border-white" : "border-green-500"}`}
                                onClick={() => setItemColor("green")}
                            >
                                <FaCheck size={25} className={`duration-300 ${itemColor === "green" ? "text-white" : "text-transparent"}`} />
                            </button>
                            <button 
                                className={`duration-300 cursor-pointer bg-yellow-600 border-3 outline-blue-700 aspec-1/1 rounded-full p-2 ${itemColor === "brown" ? "outline-2 border-white" : "border-yellow-600"}`}
                                onClick={() => setItemColor("brown")}
                            >
                                <FaCheck size={25} className={`duration-300 ${itemColor === "brown" ? "text-white" : "text-transparent"}`} />
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h2 className="text-sm">Available Sizes</h2>
                        <div className="flex gap-3">
                            {sizes.map((size) => (
                                <button
                                    key={size}
                                    type="button"
                                    onClick={() => setItemSize(size)}
                                    className={`duration-300 cursor-pointer uppercase font-semibold outline-1 text-black text-lg border py-2 aspect-4/3 rounded-sm ${itemSize === size ? "outline-blue-700 border-blue-700" : "outline-transparent border-gray-300"}`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                        <div className="flex flex-col gap-3">
                            <h2 className="text-sm">Quantity</h2>
                            <div className="flex gap-5 items-center justify-between border border-gray-300 bg-gray-100 rounded-sm">
                                <button
                                    type="button"
                                    onClick={() => setQuantity(quantity - 1)}
                                    className="cursor-pointer duration-300 p-2 text-[25px] hover:scale-110"
                                >
                                    <FaMinus size={20} />
                                </button>
                                <p className="text-lg font-semibold">{quantity}</p>
                                <button
                                    type="button"
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="cursor-pointer duration-300 p-2 text-[25px] hover:scale-110"
                                >
                                    <FaPlus size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}