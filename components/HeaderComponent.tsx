'use client';
//Components
import { useState } from "react";
import Image from "next/image";
import CsLink from "./CsLink";
//Icons
import { FiShoppingBag } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";

export default function HeaderComponent() {
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    return(
        <header className="bg-[#f9fafc] w-full">
            <div className="relative mx-auto max-w-[120rem] w-full flex items-center justify-start gap-25 py-7 px-5 lg:px-15">
                <Image 
                    src={'/images/Screenshot 2026-10-27 111349.png'}
                    alt="logo"
                    width={140}
                    height={20}
                />
                <div 
                    className={`bg-[#f9fafc] flex flex-col lg:flex-row lg:max-h-200 items-center gap-5 absolute lg:static left-0 w-full top-20 duration-300 overflow-hidden
                                ${openMenu ? 'py-5 max-h-200' : 'py-0 max-h-0'}`}
                >
                    <CsLink 
                        name="Shop all"
                        linkHref="/"
                    />
                    <CsLink 
                        name="Latest arrivals"
                        linkHref="/"
                    />
                </div>
                <div className="ms-auto flex items-center gap-5">
                    <button 
                        type="button"
                        className="cursor-pointer duration-300 outline-none hover:scale-110 focus:scale-110"
                    >
                        <FiShoppingBag size={20} />
                    </button>
                    <button 
                        type="button"
                        onClick={() => setOpenMenu(!openMenu)}
                        className="lg:hidden cursor-pointer ms-auto duration-300 outline-none hover:scale-110 focus:scale-110"
                    >
                        <AiOutlineMenu size={20} />
                    </button>
                </div>
            </div>
        </header>
    );
}