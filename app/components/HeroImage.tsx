"use client";

import Image from "next/image";
import DesktopImage from "@/public/illustration-sign-up-desktop.svg";
import MobileImage from "@/public/illustration-sign-up-mobile.svg";

const HeroImage = () => {
  return (
    <div>
      <div className="md:w-0">
        <Image src={MobileImage} width={420} alt="Mobile Hero Image" />
      </div>
      <div className="w-0 md:w-fit md:m-8">
        <Image src={DesktopImage} alt="Desktop Hero Image" />
      </div>
    </div>
  );
};

export default HeroImage;
