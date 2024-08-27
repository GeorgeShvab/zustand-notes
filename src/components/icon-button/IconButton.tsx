import { FC } from "react";
import { IconButtonProps } from "./IconButton.types";
import cn from "../../utils/cn/cn";
import "./styles.scss";

const IconButton: FC<IconButtonProps> = ({
  variant = "primary",
  className,
  ...props
}) => {
  return (
    <button
      className={cn("icon-button", "icon-button_" + variant, className)}
      {...props}
    />
  );
};

export default IconButton;
