import { FC } from "react";
import { ButtonProps } from "./Button.types";
import cn from "../../utils/cn/cn";
import "./styles.scss";

const Button: FC<ButtonProps> = ({
  variant = "primary",
  className,
  ...props
}) => {
  return (
    <button
      className={cn("button", "button_" + variant, className)}
      {...props}
    />
  );
};

export default Button;
