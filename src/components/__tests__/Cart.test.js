import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import MOCK_DATA_NAME from "../mocks/mockResListData.json";
import RestaurantMenu from "../RestaurantMenu";
import { Provider } from "react-redux";
import foodStore from "../../redux/foodStore";
import "@testing-library/jest-dom";
import RestaurantCategory from "../RestaurantCategory";
import ItemListCategory from "../ItemListCategory";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  })
);


it("should Load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <Provider store={foodStore}>
        <RestaurantMenu />
        <RestaurantCategory />
        <ItemListCategory />
      </Provider>
    )
  );

  const accordionHeader = screen.getByText("Recommended (20)");
  fireEvent.click(accordionHeader);

  // expect(screen.getAllByTestId("foodItems").length).toBe(5);

  // expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();

  // const addBtns = screen.getAllByRole("button", { name: "Add +" });
  // fireEvent.click(addBtns[0]);

  // expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

  // fireEvent.click(addBtns[1]);

  // expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

  // expect(screen.getAllByTestId("foodItems").length).toBe(7);

  // fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  // expect(screen.getAllByTestId("foodItems").length).toBe(5);

  // expect(
  //   screen.getByText("Cart is empty. Add Items to the cart!")
  // ).toBeInTheDocument();
});
