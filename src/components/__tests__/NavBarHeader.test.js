import { fireEvent, render, screen } from "@testing-library/react";
import NavBarHeader from "../NavBarHeader";
import { Provider } from "react-redux";
import foodStore from "../../redux/foodStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("Should load the header component login button", () => {
  render(
    <BrowserRouter>
      <Provider store={foodStore}>
        <NavBarHeader />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", {name: "Login"})

  expect(loginButton).toBeInTheDocument()
});

it("Should change the login btn to logout after click ", () => {
  render(
    <BrowserRouter>
      <Provider store={foodStore}>
        <NavBarHeader />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", {name: "Login"})

  fireEvent.click(loginButton)

  const logOutButton = screen.getByRole("button", {name: "Logout"})
  expect(logOutButton).toBeInTheDocument()
  console.log(logOutButton)

});


it("Should load the header component look for cartItem", () => {
  render(
    <BrowserRouter>
      <Provider store={foodStore}>
        <NavBarHeader />
      </Provider>
    </BrowserRouter>
  );

//   const cartItem = screen.getByText("Cart (0 item)")

 // with regex
  const cartItem = screen.getByText(/Cart/)

  expect(cartItem).toBeInTheDocument()
});
