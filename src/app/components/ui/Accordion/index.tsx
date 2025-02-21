"use client";

import React, { FC, useState } from "react";
import { AccordionProps } from './index.d';
import { MediaSans } from "@/app/layout";
import { ArrowDown } from "lucide-react";

const Accordion: FC<AccordionProps> = ({
  title,
  children
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden border-b border-solid border-black">
      {/* Accordion Header */}
      <button
        className="w-full text-left py-3 flex justify-between items-center transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`${MediaSans.className} text-[40px]`}>{title}</span>
        <div className={`w-[42px] h-[42px] rounded-full bg-black flex justify-center items-center transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}>
        <ArrowDown width={24} height={24} className="text-white" />
        </div>
      </button>

      {/* Accordion Body */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100 py-3" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <p className="text-[20px]">{children}</p>
      </div>
    </div>
  );
};

export default Accordion;
