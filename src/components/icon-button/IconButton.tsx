import { FC, ForwardRefRenderFunction, forwardRef } from "react";

import { IconButtonProps } from "@/components/icon-button/IconButton.types";

import cn from "@/utils/cn/cn";

import "@/components/icon-button/styles.scss";

const IconButton: ForwardRefRenderFunction<
  HTMLButtonElement,
  IconButtonProps
> = ({ variant = "primary", className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn("icon-button", "icon-button_" + variant, className)}
      {...props}
    />
  );
};

export default forwardRef(IconButton);
