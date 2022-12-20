import {render, screen} from "@testing-library/react";
import Valueinfo from "../components/Valueinfofields.js";
import "@testing-library/jest-dom";

describe("Valueiinfo", () => {
  it("renders an octopus", () => {
    render(<Valueinfo />);

    const heading = screen.getByTestId("test");

    expect(heading).toBeInTheDocument();
  });
});
