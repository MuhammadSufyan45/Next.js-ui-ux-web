import Image from "next/image";
import feature1 from "../../../public/feature1.svg";
import button from "../../../public/Button.png";
import check from "../../../public/check 1.png";
import buttongreen from "../../../public/Buttongreen.svg";
import feature2 from "../../../public/Image2.png";
import buttonpink from "../../../public/Buttonpink.svg";
import feature3 from "../../../public/Image3.png";

export function Features(){
    return(
        <div className="flex flex-col gap-y-[56px] py-[56px] lg:py-120px lg:gap-y-[80px]">
            {/* Feature-1 */}
            <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
                <Image src={feature1} 
                alt="feature1" 
                className="hidden w-1/2 sm:block"
                />
                <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
                    <h3 className="font-medium text-[#0085FF] lg:text-[18px]">
                        Sales Monitoring
                    </h3>
                    <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
                        Simplify your sales monitoring
                    </h1>
                    <Image 
                    src={feature1} 
                    alt="feature1" 
                    className="pt-[24px] sm:hidden"/>
                    <p className="py-[24px] text-[#36485C] lg:text-[18px]">
                        Stay on top of things and revamp your work process with our game-changing feature.
                        Get a bird's eye view with our customizable dashboard.
                    </p>
                     <ul className="flex flex-col gap-y-3 lg:text-[18px]">
                       <li className="flex items-center gap-x-2 text-[#36485C]">
                        <span>
                            <Image src={check} alt="check1"/>
                        </span>
                        Lorem ipsum dolor sit amet
                       </li> 
                       <li className="flex items-center gap-x-2 text-[#36485C]">
                        <span>
                            <Image src={check} alt="check2"/>
                        </span>
                        Lorem ipsum dolor sit amet
                       </li> 
                       <li className="flex items-center gap-x-2 text-[#36485C]">
                        <span>
                            <Image src={check} alt="check3"/>
                        </span>
                        Lorem ipsum dolor sit amet
                       </li> 
                     </ul>   
                     <p className="flex items-center gap-x-3 text-[#0085FF] pt-[24px] font-medium lg:text-[18px]">
                     Learn More
                        <span>
                            <Image src={button} alt="button"/>
                        </span>
                     </p>
                </div>
            </div>

            {/* Feature-2 */}

            <div className="flex flex-col gap-x-6 sm:flex-row">
                <Image src={feature2} 
                alt="feature1" 
                className="hidden w-1/2 sm:block"
                />
                <div className="sm:w-1/2 lg:py-[56px] lg:pl-[56px]">
                    <h3 className="font-medium text-[#00A424] lg:text-[18px]">
                    Customer Support
                    </h3>
                    <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
                    Get in touch with your customers
                    </h1>
                    <Image 
                    src={feature2} 
                    alt="feature1" 
                    className="pt-[24px] sm:hidden"/>
                    <p className="py-[24px] text-[#36485C] lg:text-[18px]">
                        Stay on top of things and revamp your work process with our game-changing feature.
                        Get a bird's eye view with our customizable dashboard.
                    </p>
                     <ul className="flex flex-col gap-y-3 lg:text-[18px]">
                       <li className="flex items-center gap-x-2 text-[#36485C]">
                        <span>
                            <Image src={check} alt="check1"/>
                        </span>
                        Lorem ipsum dolor sit amet
                       </li> 
                       <li className="flex items-center gap-x-2 text-[#36485C]">
                        <span>
                            <Image src={check} alt="check2"/>
                        </span>
                        Lorem ipsum dolor sit amet
                       </li> 
                       <li className="flex items-center gap-x-2 text-[#36485C]">
                        <span>
                            <Image src={check} alt="check3"/>
                        </span>
                        Lorem ipsum dolor sit amet
                       </li> 
                     </ul>   
                     <p className="flex items-center gap-x-3 text-[#00A424] pt-[24px] font-medium lg:text-[18px]">
                     Learn More
                        <span>
                            <Image src={buttongreen} alt="button"/>
                        </span>
                     </p>
                </div>
            </div>

            {/* Feature-3 */}

            <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
                <Image src={feature3} 
                alt="feature1" 
                className="hidden w-1/2 sm:block"
                />
                <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
                    <h3 className="font-medium text-[#EB2891] lg:text-[18px]">
                    Growth Monitoring
                    </h3>
                    <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
                    Monitor your sites new subscribers
                    </h1>
                    <Image 
                    src={feature3} 
                    alt="feature1" 
                    className="pt-[24px] sm:hidden"/>
                    <p className="py-[24px] text-[#36485C] lg:text-[18px]">
                        Stay on top of things and revamp your work process with our game-changing feature.
                        Get a bird's eye view with our customizable dashboard.
                    </p>

                    <div className="flex w1/2 gap-x-[24px]">
                        <div className="w-1/2 flex-col gap-y-3">
                            <h3 className="text-[#172026] text-[20px] font-medium">100+</h3>
                            <p className="text-[#36485C]">Lorem ipsum dolor sit</p>
                        </div>
                        <div className="w-1/2 flex-col gap-y-3">
                        <h3 className="text-[#172026] text-[20px] font-medium">800+</h3>
                        <p className="text-[#36485C]">Lorem ipsum dolor sit</p>
                        </div>
                    </div>
                    
                     <p className="flex items-center gap-x-3 text-[#EB2891] pt-[24px] font-medium lg:text-[18px]">
                     Learn More
                        <span>
                            <Image src={buttonpink} alt="button"/>
                        </span>
                     </p>
                </div>
            </div>


        </div>
    )

};