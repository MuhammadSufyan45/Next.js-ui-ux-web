import Image from "next/image";
import gradient2 from "../../../public/Gradient2.png";
import arrow2 from "../../../public/arrow2.png";

export function Cta(){
    return(
        <div className="w-full rounded-[16px] bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 py-[56px] px-[32px] text-center lg:my-[60px] lg:px-[324px] lg:p-[89px]">
            <h1 className="text-white text-[32px] font-medium lg:text-[56px] lg:font-medium">
                Monitor your website like a pro
            </h1>
            <p className="pt-6 text-white lg:pt-[48px] lg:text-[18px]">
            Join over 800+ happy site owners boosting productivity and efficiency!
            </p> 

            <div className="mt-[40px] flex flex-col w-full items-center lg:mt-[56px] lg:flex-row lg:justify-center gap-x-[40px]">
                <button className="py-[16px] px-[32px] bg-white text-[#EB2891] text-[18px] font-medium w-fit rounded-[6px]">
                    Try for free
                </button>

                <button className="flex w-full items-center justify-center gap-x-3 text-white text-[18px] font-medium mt-[32px] lg:w-fit lg:mt-0">
                    Contact Sales 
                    <span><Image src={arrow2} alt="Learn More"/></span>
                </button>
            </div>
        </div>
    )
};