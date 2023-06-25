"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import useModal from "../hooks/useModal";
import Button from "./Button";

interface FormProps {
  handleEmail: string;
}

const Form: React.FC<FormProps> = ({ handleEmail }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      emailAddress: "",
    },
  });

  const [validEntry, setValidEntry] = useState(true);
  const modal = useModal();
  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          const regex = new RegExp(
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
          );
          const validEmail = regex.test(data.emailAddress);
          if (validEmail && !errors.emailAddress?.message) {
            setValidEntry(true);
            //Display Modal with email address
            modal.onOpen();
            handleEmail(data.emailAddress);
          } else {
            // Show error state
            setValidEntry(false);
          }
        })}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-row justify-between">
          <label>Email address</label>
          {!validEntry && (
            <label className="text-rose-600">Valid email required</label>
          )}
        </div>

        <input
          {...register("emailAddress", {
            required: "An email address is required to submit",
          })}
          placeholder="email@company.com"
          className={`rounded-lg border h-14 p-6 cursor-pointer ${
            !validEntry
              ? "border-rose-600 bg-rose-100 text-rose-600"
              : "border-gray-300 bg-white"
          } `}
        />
        <Button value="Subscribe to monthly newsletter" height="h-14" />
      </form>
    </div>
  );
};

export default Form;
