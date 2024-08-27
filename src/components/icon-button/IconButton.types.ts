import { ComponentProps } from "react";
import { Variant } from "../../types";

export interface IconButtonProps extends ComponentProps<"button"> {
  variant?: Variant;
}
