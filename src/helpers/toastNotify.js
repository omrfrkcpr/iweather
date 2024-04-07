import { toast } from "react-toastify";

const baseOptions = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const toastSuccessNotify = (msg) =>
  toast.success(msg, {
    ...baseOptions,
    theme: "colored",
  });

export const toastInfoNotify = (msg) =>
  toast.info(msg, {
    ...baseOptions,
    theme: "colored",
    autoClose: 3000,
  });

export const toastWarnNotify = (msg) =>
  toast.warn(msg, {
    ...baseOptions,
    autoClose: 2000,
  });

export const toastErrorNotify = (msg) =>
  toast.error(msg, {
    ...baseOptions,
    theme: "colored",
    autoClose: 3000,
  });
