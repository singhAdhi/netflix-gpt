import "./App.css";
import Body from "./Components/Body";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <Body />
      </div>
    </Provider>
  );
}

export default App;
