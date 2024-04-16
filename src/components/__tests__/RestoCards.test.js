import {render, screen} from "@testing-library/react";
import RestoCards from "../RestoCards";
import resCardMock from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"


it ("Should load RestoCards component with mock data as props", () => {
    render(<RestoCards item={resCardMock}/>)

    const name = screen.getByText("Leon's - Burgers & Wings (Leon Grill)")
    expect(name).toBeInTheDocument()
})




