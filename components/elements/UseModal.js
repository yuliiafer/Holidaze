import { useState } from "react";

const UseModal = (callback) => {
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
    callback && callback();
  };

  const openModal = () => {
    setOpen(true);
  };
  return [open, openModal, onClose];
};

export default UseModal;
