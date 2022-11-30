import {render, screen} from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders a progressbar", () => {
    render(<Home />);

    const progressbar = screen.getByRole("progressbar");

    expect(progressbar).toBeInTheDocument();
  });
});
