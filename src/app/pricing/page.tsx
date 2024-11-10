import Image from "next/image";
import check from "../../../public/check 1.png";
import checkwhite from "../../../public/checkwhite.png";

export default function Pricing(){
    return(
    <div id="pricing" className="py-[48px] lg:py-[60px] px-[20px] lg:container lg:px-20 mx-auto">
        <h1 className="text-[#172026] font-medium text-center text-[24px] lg:text-[42px]">
        Flexible plans for you
        </h1>
        <p className="text-center text-[#36485C] pt-[16px] pb-[40px] lg:text-[18px]">
        No hidden fees!
        </p>

        <div className="flex flex-col gap-y-6 gap-x-[24px] lg:flex-row">

           {/* Card 1 */}

            <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
                <div>
                    <h3 className="font-medium text-[18px] text-[#4328EB] lg:text-xl">
                    Free Trial
                    </h3>
                    <p className="pt-[12px] text-[#36485C] lg:text-[18px]">
                    Perfect for testing the waters
                    </p>
                    <h2 className="text-[#172026] pt-[16px] font-medium text-2xl lg:text-[32px]">
                    $0<span className="text-[#5F7896] ">/mo</span>
                    </h2>

                    <ul className="flex flex-col gap-y-2 pt-4 text-[#36485C]">
                        <li className="flex items-center gap-x-2">
                            <span><Image src={check} alt="check"/></span>
                        Lorem ipsum dolor sit amet
                        </li>

                        <li className="flex items-center gap-x-2">
                            <span><Image src={check} alt="check"/></span>
                        Lorem ipsum dolor sit amet
                        </li>

                        <li className="flex items-center gap-x-2">
                            <span><Image src={check} alt="check"/></span>
                        Lorem ipsum dolor sit amet
                        </li>
                    </ul>
                </div>
                <button className="mt-4 rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">Start Trial</button>
            </div>

            {/* Card 2 */}

            <div className="w-full rounded-[8px] bg-[#4328EB] p-6 flex flex-col">
                <div>
                    <h3 className="font-medium text-[18px] text-white lg:text-xl">
                    Business
                    </h3>
                    <p className="pt-[12px] text-white lg:text-[18px]">
                    Perfect for small businesses
                    </p>
                    <h2 className="text-white pt-[16px] font-medium text-2xl lg:text-[32px]">
                    $500<span className="text-white ">/mo</span>
                    </h2>

                    <ul className="flex flex-col gap-y-2 pt-4 text-white">
                        <li className="flex items-center gap-x-2">
                            <span><Image src={checkwhite} alt="check"/></span>
                        Lorem ipsum dolor sit amet
                        </li>

                        <li className="flex items-center gap-x-2">
                            <span><Image src={checkwhite} alt="check"/></span>
                        Lorem ipsum dolor sit amet
                        </li>

                        <li className="flex items-center gap-x-2">
                            <span><Image src={checkwhite} alt="check"/></span>
                        Lorem ipsum dolor sit amet
                        </li>

                        <li className="flex items-center gap-x-2">
                            <span><Image src={checkwhite} alt="check"/></span>
                        Lorem ipsum dolor sit amet
                        </li>

                        <li className="flex items-center gap-x-2">
                            <span><Image src={checkwhite} alt="check"/></span>
                        Lorem ipsum dolor sit amet
                        </li>
                    </ul>
                </div>
                <button className="mt-4 rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">Start Trial</button>
            </div>

            {/* Card 3 */}

            <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
                <div>
                    <h3 className="font-medium text-[18px] text-[#4328EB] lg:text-xl">
                    Enterprise
                    </h3>
                    <p className="pt-[12px] text-[#36485C] lg:text-[18px]">
                    Perfect for big companies
                    </p>
                    <h2 className="text-[#172026] pt-[16px] font-medium text-2xl lg:text-[32px]">
                    Custom
                    </h2>

                   <p className="pt-4 text-[16px] text-[#36485C]">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                   </p>
                   <p className="pt-2 text-[16px] text-[#36485C]">
                   Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                   </p>

                </div>
                <button className="mt-4 rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">Contact Us</button>
            </div>
        </div>


    </div>
    )
};