import { ComponentProps } from "react";

export interface ColorPickerProps
  extends Omit<ComponentProps<"div">, "onChange"> {
  color: string;
  colors: string[];
  onChange: (color: string) => void;
}
