import { Provider } from "react-redux";
import Body from "./component/Body";
import Header from "./component/Header";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store} >
      <div >
          <Header />
          <Body />
      </div>
    </Provider>
  );
}

export default App;
