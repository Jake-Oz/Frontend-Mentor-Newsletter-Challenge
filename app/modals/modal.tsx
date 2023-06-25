"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import IconSuccess from "@/public/icon-success.svg";
import Button from "../components/Button";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  actionLabel,
  disabled,
}) => {
  const [showModal, setShowModal] = useState(isOpen);
  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);

  if (!isOpen) {
    return null;
  }
  return (
    <div className="flex flex-col p-14">
      <div>
        <Image src={IconSuccess} alt="Success Tick Icon" />
        <div className="text-6xl font-medium mt-8">{title}</div>
        <div className="text-xl mt-4 mb-8">{body}</div>
        <Button value={actionLabel} onClick={onSubmit} height="h-14" />
      </div>
    </div>
  );
};
export default Modal;
