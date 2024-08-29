declare module "react" {
  export interface CSSProperties {
    [key: `--${string}`]: string;
  }
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
