type CustomCSSVar = { [key in `--${string}`]: string };

declare module "react" {
  export interface CSSProperties extends CustomCSSVar {}
}

export interface Note {
  id: string;
  title: string;
  content: string;
  color: string;
  createdAt: number;
  updatedAt: number;
}

export type Variant = "danger" | "primary";
