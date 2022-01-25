import React from "react";
import { CloseIcon } from "../../atoms/Icons";
import "./styles.css";

const AlertModal = ({
  title,
  showModal,
  closeModal,
  children,
  customClasses = "",
  clearStatesOnClose,
}) => {
  const handleClose = (e) => {
    const isModal = e.target.classList.contains("modal");
    const isBtnClose = e.currentTarget.classList.contains("close_btn");

    if (isModal || isBtnClose) {
      clearStatesOnClose && clearStatesOnClose({ state: false });
      closeModal();
    }
  };

  return (
    <div
      className={`modal d-flex flex-column justify-content-center align-items-center ${
        !showModal && "d-none"
      }`}
      onClick={handleClose}
    >
      <div
        className={`d-flex justify-content-between align-items-center bg-color px-4 pt-3  col-md-4 ${customClasses} mb-0`}
      >
        <h3 className="text-color pb-0 mb-0 fw-bold">{title}</h3>
        <button
          className="text-color btn btn-small rounded-0 close_btn pe-0"
          onClick={handleClose}
        >
          <CloseIcon />
        </button>
      </div>

      {children}
    </div>
  );
};

export default React.memo(AlertModal);
