import React from "react";

const ErrorForm = ({ children, msg, size, styles } = { size: 'small', styles: '' }) => {

  return  (
    <p className={`text-danger ${size} ${styles}`}>
      {children ? children : msg}
    </p>
  );
};

export default ErrorForm;
