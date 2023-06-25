"use client";

import Image from "next/image";
import IconList from "@/public/icon-list.svg";

const List = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4 items-start">
        <div className="basis-7">
          <Image src={IconList} alt="Tick Icon" />
        </div>
        <div className="text-lg leading-6">
          Product discovery and building what matters
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <div className="basis-7">
          <Image src={IconList} alt="Tick Icon" />
        </div>
        <div className="text-lg leading-6">
          Measuring to ensure updates are a success
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <div className="basis-7">
          <Image src={IconList} alt="Tick Icon" />
        </div>
        <div className="text-lg leading-6">And much more!</div>
      </div>
    </div>
  );
};

export default List;
