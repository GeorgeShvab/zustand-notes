import { fireEvent } from "@testing-library/react";

const fireChange = (element: HTMLElement, value: string) => {
  fireEvent.change(element, {
    target: { value }
  });
};

export default fireChange;
