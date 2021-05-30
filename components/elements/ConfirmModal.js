import { useEffect } from "react";

const ConfirmModal = ({ open, message, close }) => {
  useEffect(() => {
    let time;
    if (open) {
      time = setTimeout(close, 2000);
    }
    return () => open && clearTimeout(time);
  }, [open, close]);
  return (
    <div className={`div ${open ? "fixed" : "hidden"}`}>
      <div className="">
        <h6 className="">Confirmed</h6>
        <p>{message}</p>
      </div>
    </div>
  );
};
export default ConfirmModal;
