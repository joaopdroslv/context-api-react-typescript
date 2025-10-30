import type { FC } from "react";
import { ActionButton } from "../ui/ActionButton";

interface ConfirmationModalProps {
  message: string;
  onConfirmation: () => void;
  onDeny: () => void;
  isOpen: boolean;
}

export const ConfirmationModal: FC<ConfirmationModalProps> = ({
  message,
  onConfirmation,
  onDeny,
  isOpen,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      role="dialog"
    >
      <div className="relative bg-white rounded-lg shadow-sm p-6 w-full max-w-sm">
        <button
          type="button"
          onClick={onDeny}
          className="cursor-pointer absolute top-3 right-3 text-black rounded-lg text-lg w-10 h-10 flex justify-center items-center"
        >
          ✕<span className="sr-only">Close</span>
        </button>

        <div className="text-center">
          <svg
            className="mx-auto mb-4 text-black w-14 h-14"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          <h3 className="mb-5 text-lg font-normal text-black">{message}</h3>

          <div className="flex justify-center gap-3 mt-10">
            {/* <button
              onClick={onConfirmation}
              type="button"
              className="cursor-pointer text-white bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Yes, I'm sure
            </button> */}
            <ActionButton color="red" handleClick={onConfirmation}>
              Yes, I'm sure
            </ActionButton>

            {/* <button
              onClick={onDeny}
              type="button"
              className=" cursor-pointer py-2.5 px-5 text-sm font-medium text-black-900 bg-white rounded-lg border border-black-200"
            >
              Cancel
            </button> */}
            <ActionButton color="dark" handleClick={onDeny}>
              Cancel
            </ActionButton>
          </div>
        </div>
      </div>
    </div>
  );
};
