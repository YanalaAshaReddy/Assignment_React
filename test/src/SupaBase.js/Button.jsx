import React from "react";

const Button = ({ children, className, ...props }) => {
  return (
    <button className={`py-2 px-4 font-semibold rounded ${className}`} {...props}>
      {children}
    </button>
  );
};

export { Button };
