"use client";
import "tailwindcss/tailwind.css";
import Image from "next/image";
import Logo from "../../../public/Logo.png";
import profile from "../../../public/User.png";
import menu from "../../../public/Menu.svg";
import Link from "next/link";
import { useState } from "react";

export function Navbar(){
  const [isOpen, setIsOpen] = useState(false);
  return(
      <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto">
        <div className="flex items-center">
            <Image src={Logo} alt="logo"/>
            <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
            <ul className="flex gap-x-[56px]">
           <Link href="/hero">
            <span className="font-medium text-[#36485C]">Home</span>
           </Link>
           <Link href="/features">
            <span className="font-medium text-[#36485C]">Features</span>
           </Link>
           <Link href="/pricing">
            <span className="font-medium text-[#36485C]">Pricing</span>
           </Link>
           <Link href="/faq">
            <span className="font-medium text-[#36485C]">Faq</span>
           </Link>
           <Link href="/cta">
            <span className="font-medium text-[#36485C]">Get started</span>
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
            {/* <Image src={menu} alt="menu" className="lg:hidden"/> */}
             {/* Mobile Hamburger Icon */}
        <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Image src={menu} alt="menu" />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-0 left-0 w-full bg-slate-300 bg-opacity-50 backdrop-blur-sm p-6 transition-all duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Close Icon */}
          <span
            onClick={() => setIsOpen(false)}
            className="text-3xl font-bold cursor-pointer text-[#36485C]"
          >
            &times;
          </span>
          <p className="font-semibold text-lg text-[#36485C]">Menu</p>
        </div>
        <ul className="space-y-4 mt-6">
          <Link href="/hero">
            <span className="block font-medium text-[#36485C] hover:text-blue-500" onClick={() => setIsOpen(false)}>Home</span>
          </Link>
          <Link href="/features">
            <span className="block font-medium text-[#36485C] hover:text-blue-500" onClick={() => setIsOpen(false)}>Features</span>
          </Link>
          <Link href="/pricing">
            <span className="block font-medium text-[#36485C] hover:text-blue-500" onClick={() => setIsOpen(false)}>Pricing</span>
          </Link>
          <Link href="/faq">
            <span className="block font-medium text-[#36485C] hover:text-blue-500" onClick={() => setIsOpen(false)}>Faq</span>
          </Link>
          <Link href="/cta">
            <span className="block font-medium text-[#36485C] hover:text-blue-500" onClick={() => setIsOpen(false)}>Get started</span>
          </Link>
        </ul>
        </div>


      </nav>
    )
};