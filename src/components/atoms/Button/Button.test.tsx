import { render, screen, cleanup } from "@testing-library/react";
import { describe, expect, test, afterEach, vi } from "vitest";

import "@testing-library/jest-dom/vitest";

import Button from "./Button";

afterEach(cleanup);

describe("Button Component", () => {
  test("should render correctly with given children", () => {
    render(<Button>Click Me</Button>);
    const buttonElement = screen.getByText("Click Me");
    expect(buttonElement).toBeInTheDocument();
  });

  test("should apply default class names", () => {
    render(<Button>Click Me</Button>);
    const buttonElement = screen.getByText("Click Me");
    expect(buttonElement).toHaveClass(
      "relative flex items-center justify-center bg-green-600 text-white font-semibold px-6 rounded-lg transform hover:scale-[1.02] transition-all"
    );
  });

  test("should apply custom class names", () => {
    render(<Button className="custom-class">Click Me</Button>);
    const buttonElement = screen.getByText("Click Me");
    expect(buttonElement).toHaveClass("custom-class");
  });

  test("should handle onClick event", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    const buttonElement = screen.getByText("Click Me");
    buttonElement.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  test("should be disabled when disabled prop is true", () => {
    render(<Button disabled>Click Me</Button>);
    const buttonElement = screen.getByText("Click Me");
    expect(buttonElement).toBeDisabled();
  });
});
