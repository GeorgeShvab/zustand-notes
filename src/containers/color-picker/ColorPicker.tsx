import { FC } from "react";

import { ColorPickerProps } from "@/containers/color-picker/ColorPicker.types";

import IconButton from "@/components/icon-button/IconButton";

import cn from "@/utils/cn/cn";

import "@/containers/color-picker/styles.scss";

const ColorPicker: FC<ColorPickerProps> = ({
  color,
  colors,
  onChange,
  className,
  ...props
}) => {
  return (
    <div className={cn("color-picker", className)} {...props}>
      {colors.map((item) => (
        <IconButton
          key={item}
          style={{
            "--bg-color": item
          }}
          className={cn(
            "color-picker__item",
            color === item && "color-picker__item_selected"
          )}
          onClick={() => onChange(item)}
          aria-label="Select color"
          type="button"
        />
      ))}
    </div>
  );
};

export default ColorPicker;
