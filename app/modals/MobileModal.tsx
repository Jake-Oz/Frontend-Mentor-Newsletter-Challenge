"use client";

import useModal from "../hooks/useModal";
import Modal from "./modal";

interface MobileModalProps {
  email: string;
}

const MobileModal: React.FC<MobileModalProps> = ({ email }) => {
  const mobileModal = useModal();

  const body = (
    <div>
      <p>
        A confirmation email has been sent to{" "}
        <span className="font-bold">{email}</span>. Please open it and click the
        button inside to confirm your subscription.
      </p>
    </div>
  );

  return (
    <div className="max-w-sm max-h-fit">
      <Modal
        isOpen={true}
        onClose={mobileModal.onClose}
        onSubmit={mobileModal.onClose}
        title="Thanks for subscribing!"
        actionLabel="Dismiss Message"
        body={body}
      />
    </div>
  );
};

export default MobileModal;
