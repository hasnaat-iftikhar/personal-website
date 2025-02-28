"use client";

import React, { FC, useState } from "react";
import { AccordionProps } from './index.d';
import { MediaSans } from '@/app/utils/fonts';
import { ArrowDown } from "lucide-react";

const Accordion: FC<AccordionProps> = ({
  title,
  content
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden border-b border-solid border-black">
      {/* Accordion Header */}
      <button
        className="w-full text-left py-3 flex justify-between items-center transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`${MediaSans.className} text-[32px] md:text-[40px]`}>{title}</span>
        <div className={`w-[36px] h-[36px] md:w-[42px] md:h-[42px] rounded-full bg-black flex justify-center items-center transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}>
        <ArrowDown width={24} height={24} className="text-white w-[18px] h-[18px] md:w-[24px] md:h-[24px]" />
        </div>
      </button>

      {/* Accordion Body */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100 py-3" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <p className="text-[20px]">{content}</p>
      </div>
    </div>
  );
};

export default Accordion;
