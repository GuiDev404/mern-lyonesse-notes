import React from "react";

const Button = ({ children, styles, handleClick, ...props }) => {
  return (
    <button className={`btn rounded-0 ${styles}`} onClick={handleClick && handleClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
