import React from "react";

const Input = ({ className, ...props }) => {
  return <input className={`p-2 border rounded ${className}`} {...props} />;
};

export { Input };
