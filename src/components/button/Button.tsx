import { ForwardRefRenderFunction, forwardRef } from "react";

import { ButtonProps } from "@/components/button/Button.types";

import cn from "@/utils/cn/cn";

import "@/components/button/styles.scss";

const Button: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { variant = "primary", className, ...props },
  ref
) => {
  return (
    <button
      ref={ref}
      className={cn("button", "button_" + variant, className)}
      {...props}
    />
  );
};

export default forwardRef(Button);
