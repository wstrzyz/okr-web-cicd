import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Here is my new cta label/i);
  expect(linkElement).toBeInTheDocument();
});
