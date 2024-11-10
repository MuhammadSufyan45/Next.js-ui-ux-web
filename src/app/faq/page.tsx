import * as Accordion from "@radix-ui/react-accordion";
import Image from "next/image";
import plus from "../../../public/Plus.svg";

const items = [
    {
        question : "What is the primary advantage of using your service for businesses?",
        answer : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
    },

    {
        question : "In what ways can I customize my dashboard for better usability?",
        answer : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
    },

    {
        question : "Is there dedicated customer support available for users?",
        answer : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
    },

    {
        question : "Can I easily integrate your platform with other software tools?",
        answer : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
    },

    {
        question : "What are the different pricing models available for your service?",
        answer : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
    }
]



export default function Faq(){
    return(
        <div id="faq" className="flex flex-col w-full py-[48px] px-[20px] lg:container lg:px-20 mx-auto lg:py-[60px] lg:flex-row lg:gap-x-6 ">
            <div className="lg:w-1/3 lg:py-[32px] lg:pr-[56px]">
                <h3 className="text-[#EB2891] font-medium text-[14px] lg:text-[16px]">
                    Frequently Asked Questions
                </h3>
                <h1 className="text-[#172026] font-medium text-[24px] py-4 lg:text-[42px] lg:leading-[58px]">
                    Lets clarify some of your questions
                </h1>
                <p className="text-[#36485C] text-[16px] pb-[24px]">
                We are here to provide detailed answers and ensure you have all the support you need.
                </p>
            </div>

            <div className="lg:w-2/3">
                <Accordion.Root
                type="single"
                defaultValue="item-1"
                collapsible
                className="flex flex-col gap-y-4"
                >
                    {items.map((item, index) => (
                        <div key={index}>
                            <Accordion.Item 
                            value={`item-${index + 1}`} 
                            className="bg-[#E3F1FF] p-[16px] rounded-[8px]">
                                <Accordion.Header>
                                    <Accordion.Trigger className="flex w-full items-center justify-between">
                                        <p className="text-left font-medium text-[#172026] lg:text-[18px]">{item.question}</p>
                                        <span>
                                            <Image
                                            src={plus}
                                            alt="Plus"
                                            className="h-10 w-10 lg:w-6 lg:h-6"
                                            />
                                        </span>
                                    </Accordion.Trigger>
                                </Accordion.Header>
                                <Accordion.Content>
                                    <p className="pt-2 text-[#36485C]">{item.answer}</p>
                                </Accordion.Content>
                            </Accordion.Item>

                        </div>
                    ))}

                </Accordion.Root>    
            </div>

        </div>
    )  
};