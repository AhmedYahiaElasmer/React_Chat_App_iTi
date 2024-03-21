import React from "react";

const sizes = {
  s: "text-7xl font-semibold md:text-5xl",
  xs: "text-4xl font-semibold md:text-[34px] sm:text-[32px]",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-montserrat ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
