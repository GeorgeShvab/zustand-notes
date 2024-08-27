import { FC } from "react";

import { InputProps } from "@/components/input/Input.types";

import cn from "@/utils/cn/cn";

import "@/components/input/styles.scss";

const Input: FC<InputProps> = ({
  className,
  isError,
  containerProps,
  ...props
}) => {
  return (
    <div
      {...containerProps}
      className={cn(
        "input",
        containerProps?.className,
        isError && "input_error"
      )}
    >
      <input className={cn("input__element", className)} {...props} />
    </div>
  );
};

export default Input;
