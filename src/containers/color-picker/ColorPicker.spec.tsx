import { fireEvent, render, screen } from "@testing-library/react";

import { beforeEach, describe, expect, test, vi } from "vitest";

import ColorPicker from "@/containers/color-picker/ColorPicker";

const mockCallback = vi.fn();

const colors = ["#ffffff", "#000000"];

describe("Test ColorPicker", () => {
  beforeEach(() => {
    render(
      <ColorPicker onChange={mockCallback} colors={colors} color={colors[1]} />
    );
  });

  test("Should apply propriate class to selected item", () => {
    const firstColorButton = screen.getAllByRole("button")[1];

    expect(firstColorButton).toHaveClass("color-picker__item_selected");
  });

  test("Shoudl call passed callback fn when clicked on particular color", () => {
    const firstColorButton = screen.getAllByRole("button")[0];

    fireEvent.click(firstColorButton);

    expect(mockCallback).toHaveBeenCalledWith(colors[0]);
  });
});
