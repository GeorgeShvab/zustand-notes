import { FC } from "react";

import { SnackbarProps } from "@/components/snackbar/Snackbar.types";

import cn from "@/utils/cn/cn";

import "@/components/snackbar/styles.scss";

const Snackbar: FC<SnackbarProps> = ({
  children,
  severity,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(className, "snackbar", "snackbar_" + severity)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Snackbar;
