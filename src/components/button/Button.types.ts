import { ComponentProps, ReactNode } from "react";
import { Variant } from "@/types";

export interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  variant?: Variant;
}
