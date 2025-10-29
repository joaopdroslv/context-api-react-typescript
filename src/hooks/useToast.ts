import { useToastContext } from "../context/Toast/ToastContext";

export const useToast = () => {
  return useToastContext();
};
