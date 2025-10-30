import React, { useState } from "react";
import { ConfirmationModal } from "../components/Generic/ConfirmationModal";
import { ActionButton } from "../components/ui/ActionButton";

export const TestPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-xl mx-auto mt-8 flex flex-col justify-start">
      <div className="p-4 max-w-full">
        <ConfirmationModal
          message="Are you sure u want to procced? This action is irreversible!"
          onConfirmation={() => setIsOpen(false)}
          onDeny={() => setIsOpen(false)}
          isOpen={isOpen}
        />
        <ActionButton
          color="default"
          className="mt-10"
          handleClick={() => setIsOpen(true)}
        >
          Open Modal
        </ActionButton>
      </div>
    </div>
  );
};
