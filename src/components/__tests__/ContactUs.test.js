import { render, screen } from "@testing-library/react";
import ContactUs from "../Contact";
import "@testing-library/jest-dom";

describe("Should Load all about contact components", () => {
  test("Contact page should load properly", () => {
    render(<ContactUs />);

    //Assertion
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("Should check if thier is a button", () => {
    render(<ContactUs />);

    //Assertion
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("Should look for placeholder ", () => {
    render(<ContactUs />);

    //Assertion
    const input = screen.getAllByPlaceholderText(/name|message/i);
    expect(input.length).toBe(2);
  });

  test("Should find two or multiple input boxes", () => {
    render(<ContactUs />);

    const textBoxes = screen.getAllByRole("textbox");

    console.log(textBoxes[0]);

    expect(textBoxes.length).toBe(2);
  });
});
