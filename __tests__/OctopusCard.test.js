import {render, screen} from "@testing-library/react";
import Valueinfofields from "../components/Valueinfofields.js";
import "@testing-library/jest-dom";

describe("Valueiinfofields", () => {
  it("renders an octopus", () => {
    render(<Valueinfofields />);

    const heading = screen.getByTestId("test");

    expect(heading).toBeInTheDocument();
  });
});
