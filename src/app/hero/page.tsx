import blurArrow from "../../../public/Arrow.png";
import gradient from "../../../public/Gradient.svg";
import hero from "../../../public/hero.svg";
import google from "../../../public/Google.svg";
import clutch from "../../../public/Clutch.svg";
import trustpilot from "../../../public/Trustpilot.svg";
import slack from "../../../public/Vector.png";
import cnn from "../../../public/CNN.svg";
import Image from "next/image";

export default function Hero(){
    return(
        <div className="pt-4 lg:pt-10">
            <div className="px-[20px] lg:px-[500px]">
                <h1 className="text-center text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[74px] lg:leading-[72px]">Start monitoring your website like a pro</h1>
                <p className="text-center pt-6 text-[#36485C] lg:text-[18px] lg:leading-7">Get a bird's eye view with our customizable dashboard. Stay on top of things! Revamp your work process with our game-changing feature. Boost productivity and efficiency!</p>

                <div className="flex w-full pt-8 justify-center gap-x-8">
                    <button className="bg-[#4328EB] w-1/2 py-4 px-8 text-white rounded-[4px] lg:w-fit">Try for free</button>
                    <button className="text-[#4328EB] w-1/2 flex items-center justify-center gap-x-2 lg:w-fit">View Pricing 
                    <span><Image src={blurArrow} alt="Learn more"/></span>
                    </button>
                </div>
            </div>
            <div className="relative flex h-full w-full justify-center">
                <Image src={gradient} alt="Gradient" className="min-h-[500px] w-full object-cover lg:h-auto"/>

                <div className="absolute bottom-5 flex w-full flex-col items-center">
                    <Image src={hero} alt="Hero image" className="-ml-4 h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-auto xl:w-[70%]"/>
                    <div className="flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between lg:px-20">
                        <p className="text-[#FFFFFF] lg:text-[18px]">Trusted by these companies</p>
                        <div className="grid grid-cols-3 items-center justify-center justify-items-center px-[20px] align-middle lg:grid-cols-5">
                            <Image src={google} alt="google"/>
                            <Image src={slack} alt="slack"/>
                            <Image src={trustpilot} alt="trustpilot"/>
                            <Image src={cnn} alt="cnn"/>
                            <Image src={clutch} alt="clutch"/>                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

};