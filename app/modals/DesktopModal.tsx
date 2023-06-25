"use client";

import useModal from "../hooks/useModal";
import Modal from "./modal";

interface DesktopModalProps {
  email: string;
}

const DesktopModal: React.FC<DesktopModalProps> = ({ email }) => {
  const desktopModal = useModal();

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
    <Modal
      isOpen={true}
      onClose={desktopModal.onClose}
      onSubmit={desktopModal.onClose}
      title="Thanks for subscribing!"
      actionLabel="Dismiss Message"
      body={body}
    />
  );
};

export default DesktopModal;
