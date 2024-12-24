import React from "react";
const sizes = {
    headingxs: "text-[12px] font-bold",
    headings: "text-[16px] font-semibold",
    headingmd: "text-[18px] font-semibold",
};
const Heading = ({ children, className, size = "headingxs", as, ...restProps }) => {
    const Component = as || "h6";
    return (
        <Component className={`text-gray-600_01 font-notosans ${className} ${sizes[size]}`} {...restProps}>
            {children}
        </Component>
    );
};
export { Heading };