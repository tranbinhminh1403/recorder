import { fireEvent, render, screen } from "@testing-library/react";
import Window from "../src/components/window";

const mockWindow = {
  children: <div>Hello</div>,
  title: "Test Window",
  trigger: <button>Click me</button>,
};

it("App Router: Works with Client Components (React State)", () => {
  render(<Window title={mockWindow.title} trigger={mockWindow.trigger}>
    {mockWindow.children}
  </Window>);
  fireEvent.click(screen.getByRole("button"));
  expect(screen.getByText("Hello")).toBeInTheDocument();
});
