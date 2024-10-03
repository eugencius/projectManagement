import { useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children, btnCaption }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="rounded-md px-8 pb-4 pt-8 shadow-md outline-none backdrop:bg-stone-900/90"
    >
      {children}

      <form method="dialog" className="text-right">
        <button className="cursor-pointer rounded-lg bg-stone-800 px-4 py-2 text-stone-300 duration-300 ease-out hover:bg-stone-900">
          {btnCaption}
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root"),
  );
});

export default Modal;
