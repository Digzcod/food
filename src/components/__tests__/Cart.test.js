import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import { Provider } from "react-redux";
import foodStore from "../../redux/foodStore";
import RestaurantCategory from "../RestaurantCategory";
import ItemListCategory from "../ItemListCategory";
import { BrowserRouter } from "react-router-dom";
import MOCK_LIST_ITEM from "../mocks/listItems.json";
import "@testing-library/jest-dom";
import NavBarHeader from "../NavBarHeader";



global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_LIST_ITEM);
    },
  });
});

const mockItem = {
  title: "Recommended",
  itemCards: [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
  ]
}




// Mock data for testing
// const mockData = [
//   {
//     card: {
//       info: {
//         id: 1,
//         name: 'Pizza',
//         price: 1000,
//         description: 'Delicious pizza',
//         imageId: 'pizza_image',
//       },
//     },
//   },
//   {
//     card: {
//       info: {
//         id: 2,
//         name: 'Burger',
//         price: 800,
//         description: 'Tasty burger',
//         imageId: 'burger_image',
//       },
//     },
//   },
// ];

it("should Load Restaurant Menu Component", async () => {

 
  await act(async () =>
    render(
      <>
      <BrowserRouter>
       <Provider store={foodStore}>
        <RestaurantCategory 
        item={mockItem}
        setShowIndex={jest.fn()}
        /> 
        <ItemListCategory data={MOCK_LIST_ITEM} />
        <NavBarHeader/>
       </Provider>
      </BrowserRouter>
      </>
    )
  );


  const accordionHeader = screen.getByText(/Recommended \(2\)/);
  fireEvent.click(accordionHeader);


  expect(screen.getAllByTestId("foodItems").length).toBe(MOCK_LIST_ITEM.length)
  const item = screen.getAllByRole("button", {name: /add/i})
  fireEvent.click(item[0])
  console.log(item[0])

});
