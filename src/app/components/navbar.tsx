import "tailwindcss/tailwind.css";
import Image from "next/image";
import Logo from "../../../public/Logo.png";
import profile from "../../../public/User.png";
import menu from "../../../public/Menu.svg";
import Link from "next/link";

export function Navbar(){
  return(
      <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto">
        <div className="flex items-center">
            <Image src={Logo} alt="logo"/>
            <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
            <ul className="flex gap-x-[56px]">
           <Link href="#home">
            <span className="font-medium text-[#36485C]">Features</span>
           </Link>
           <Link href="#contact">
            <span className="font-medium text-[#36485C]">Pricing</span>
           </Link>
           <Link href="#support">
            <span className="font-medium text-[#36485C]">Enterprice</span>
           </Link>
           <Link href="#about">
            <span className="font-medium text-[#36485C]">Careers</span>
           </Link>
           </ul>
            </div>
        </div>

        <div className="flex gap-x-5">
        <p className="hidden lg:block font-medium text-[#36485C] pr-[56px] pt-[2px]"> Open an account</p>
            <div className="flex items-center gap-x-4">                              
                <Image src={profile} alt="User profile"/>
                <span className="hidden font-medium text-[#36485C] lg:block">Sign in</span>
            </div>
            <Image src={menu} alt="menu" className="lg:hidden"/>
        </div>


      </nav>
    )
};