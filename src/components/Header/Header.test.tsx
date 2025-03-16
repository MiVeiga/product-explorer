import { render, screen } from "@testing-library/react";
import Header from "./index";

describe("Header", () => {
  it("renders the Header component correctly", () => {
    render(<Header />);

    expect(screen.getByText("Product Explorer")).toBeInTheDocument();
  });
});
