import { ComponentProps } from "react";

export interface TextareaProps extends ComponentProps<"textarea"> {
  isError?: boolean;
  containerProps?: ComponentProps<"div">;
}
