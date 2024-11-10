import Image from "next/image";
import logo from "../../../public/Logo.png";
import facebook from "../../../public/facebook.png";
import internet from "../../../public/internet.png";
import x from "../../../public/X.svg";
import Link from "next/link";


export function Footer(){
    return(
        <div className="pt-[80px] pb-[40px]">
            <div className="flex items-center justify-center gap-x-[12px]">
                <Image src={logo} alt="Logo"/>
                <p className="font-bold text-[17px] text-[#36485C]">Pro Ui</p>
            </div>

            <ul className="flex flex-col items-center gap-y-[32px] text-[#36485C] pt-[56px] sm:flex-row sm:justify-center sm:gap-x-5 sm:pt-5">
            <Link href="#features">
            <span className="font-medium text-[#36485C]">Features</span>
           </Link>
           <Link href="#pricing">
            <span className="font-medium text-[#36485C]">Pricing</span>
           </Link>
           <Link href="#getstart">
            <span className="font-medium text-[#36485C]">Get started</span>
           </Link>
           <Link href="#faq">
            <span className="font-medium text-[#36485C]">Faq</span>
           </Link>
            </ul>

            <p className="text-[#5F7896] font-medium text-[14px] text-center pt-[56px] sm:pt-5">
                © Copyright 2024. Your Site. All rights reserved.
            </p>

            <div className="flex items-center justify-center gap-x-[56px] pt-[40px]">
                <Image src={x} alt="x"/>
                <Image src={facebook} alt="Facebook"/>
                <Image src={internet} alt="net"/>

            </div>
        </div>
    )
};