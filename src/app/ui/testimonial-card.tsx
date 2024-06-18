import Image from "next/image";
import quoteSvg from "../../../public/images/quote-svgrepo-com.svg";
import { QuoteIcon } from "lucide-react";

export default function TestimonialCard() {
  return (
    <div className="max-w-[607px] md:w-[370px] md:max-w-[370px] hover:scale-105 px-8 transition-all ease-in-out duration-300 bg-white shadow-lg border">
      {/* <Image src={quoteSvg} width={28} className="w-28 md:w-32" alt="" /> */}

      <QuoteIcon className="text-gray-400 w-12 h-12 md:w-16 md:h-16 my-4" />

      <p className="font-inter font-normal md:text-lg italic text-pretty">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos minima nulla
        dolorum, maiores ducimus consequatur deleniti sequi harum, qui eum doloremque
        ullam, debitis enim itaque commodi! Dolores perspiciatis accusantium impedit!
      </p>
      <div className="flex items-center mt-6 mb-8">
        <div className="rounded-full bg-gray-400 w-10 h-10 md:w-16 md:h-16" />
        <div className="ml-2 md:ml-4">
          <p className="font-inter font-semibold">My Name</p>
          <p className="text-blue-600 font-inter font-normal">The company name</p>
        </div>
      </div>
    </div>
  );
}
