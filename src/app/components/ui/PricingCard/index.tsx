import React, { FC } from "react";

// Type definitions
import Button from "../Button";
import { PricingCardProps } from "./index.d";
import { ClashDisplay, MediaSans } from "@/app/layout";

// Icons
import { ArrowRight, Check } from "lucide-react";

const PricingCard: FC<PricingCardProps> = ({ title, description, price, hourlyRate, includes }) => {
  const textClassNames = "text-[20px] text-white";
  const priceTextClass = `${MediaSans.className} text-[96px] tracking-[2px] text-white leading-[100%] flex items-center`;
  const dollarSign = <span className={`${ClashDisplay.className} text-[82px] leading-[100%] mt-auto`}>$</span>;

  return (
    <div className="p-16 bg-black flex flex-col gap-6 rounded-[52px]">
      {/* Title */}
      <h3 className={`${MediaSans.className} max-w-[500px] text-[64px] leading-[100%] text-white tracking-[4px]`}>
        {title}
      </h3>

      {/* Price */}
      {price && (
        <h2 className={priceTextClass}>
          {dollarSign}
          {price}
        </h2>
      )}

      {/* Hourly Rate */}
      {hourlyRate && (
        <div className="flex items-end gap-6">
          <h2 className={priceTextClass}>
            {dollarSign}
            {hourlyRate.min}
          </h2>
          <h2 className={priceTextClass}>-</h2>
          <h2 className={priceTextClass}>
            {dollarSign}
            {hourlyRate.max}
          </h2>
          <p className="text-[36px] text-white">per hour</p>
        </div>
      )}

      {/* Description & Includes */}
      <div className="flex flex-col gap-4">
        <p className={textClassNames}>{description}</p>
        <p className={textClassNames}>👉 Includes</p>
        <div className="flex flex-col gap-2">
          {includes.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <Check width={24} height={24} className="text-white" />
              <p className={textClassNames}>{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <Button className="bg-white text-black">
        Let&apos;s go <ArrowRight width={24} height={24} />
      </Button>
    </div>
  );
};

export default PricingCard;
