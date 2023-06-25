"use client";

import List from "./components/list";
import Heading from "./components/Heading";
import HeroImage from "./components/HeroImage";
import Form from "./components/Form";
import useModal from "./hooks/useModal";
import DesktopModal from "./modals/DesktopModal";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const modal = useModal();
  const handleEmail = (value: string) => {
    setEmail(value);
  };

  return (
    <div className="md:absolute md:top-[15%]">
      {!modal.isOpen && (
        <div className="flex flex-col max-w-sm md:max-w-4xl md:flex-row md:gap-12 justify-center bg-white m-7 md:rounded-3xl">
          <div className="md:order-last">
            <HeroImage />
          </div>
          <div className="flex flex-col justify-center gap-8 p-5 md:ml-8">
            <Heading />
            <List />
            <Form handleEmail={handleEmail} />
          </div>
        </div>
      )}
      <div className="flex flex-col bg-white rounded-3xl">
        {modal.isOpen && <DesktopModal email={email} />}
      </div>
    </div>
  );
}
