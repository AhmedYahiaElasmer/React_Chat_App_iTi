import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[20px]",
  square: "rounded-[0px]",
};
const variants = {
  outline: {
    white_A700: "border-white-A700 border border-solid text-gray-50",
  },
};
const sizes = {
  xs: "h-[50px] px-[35px] text-base",
  sm: "h-[131px]",
  md: "h-[135px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "outline",
  size = "xs",
  color = "white_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer relative transition-colors duration-700 ease-in-out ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""} hover:bg-gradient-to-r from-[#1712FF] to-[#D314D7] hover:border-none`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
      <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#1712FF] to-[#D314D7] opacity-0 group-hover:opacity-100 transition-opacity"></span>
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round", "square"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["outline"]),
  color: PropTypes.oneOf(["white_A700"]),
};

export { Button };
