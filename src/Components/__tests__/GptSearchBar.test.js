import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import GptSearchBar from "../GptSearchBar";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom/extend-expect";

test("to test the component", () => {
  render(
    <Provider store={appStore}>
      <GptSearchBar />
    </Provider>
  );

  const textbox = screen.getByRole("textbox");

  // Now you can make assertions or interact with the textbox element
  expect(textbox.length).toBe();
});
