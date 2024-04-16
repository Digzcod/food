import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../mocks/mockResListData.json";
import RestroMain from "../RestroMain";
import RestoCards from "../RestoCards";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should load RestroMain with Search component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <RestroMain />
        <RestoCards/>
      </BrowserRouter>
    )
  );
  const cardsBeforeSearch = screen.getAllByTestId("resCard")
  expect(cardsBeforeSearch.length).toBe(1)

  const searchBtn = screen.getByRole("button", {name: "Search Food"})

  const searchInput= screen.getByTestId("searchInput")
  
  fireEvent.change(searchInput, { target: {value: ""} })
  fireEvent.click(searchBtn)

  const cards = screen.getAllByTestId("resCard")
  

  expect(cards.length).toBe(1)
});


it("Should filter Top Rated Restaurant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <RestroMain />
        <RestoCards/>
      </BrowserRouter>
    )
  );

  const cardsBeforeFilter = screen.getAllByTestId("resCard");

  expect(cardsBeforeFilter.length).toBe(1);

  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  fireEvent.click(topRatedBtn);

  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(1);
});



