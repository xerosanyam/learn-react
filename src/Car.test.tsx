import { test, expect } from "bun:test";
import { render, screen } from "@testing-library/react";
import Car from "./Car";

test("loads car component", async () => {
  render(<Car />);

  screen.getByText("Hello");
});

test("basic sum", () => {
  expect(2 + 3).toBe(3);
});
