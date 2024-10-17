import Image from "next/image";
import logo from "../../../public/Logo.png";
import facebook from "../../../public/facebook.png";
import internet from "../../../public/internet.png";
import x from "../../../public/X.svg";


export function Footer(){
    return(
        <div className="pt-[80px] pb-[40px]">
            <div className="flex items-center justify-center gap-x-[12px]">
                <Image src={logo} alt="Logo"/>
                <p className="font-bold text-[17px] text-[#36485C]">Pro Ui</p>
            </div>

            <ul className="flex flex-col items-center gap-y-[32px] text-[#36485C] pt-[56px] sm:flex-row sm:justify-center sm:gap-x-5 sm:pt-5">
                <li>Features</li>
                <li>Pricing</li>
                <li>Enterprise</li>
                <li>Careers</li>
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