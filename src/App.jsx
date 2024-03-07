import React from "react";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import { Provider } from "react-redux";
import myStore from "./Store";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Provider store={myStore}>
        <Header />
        <Body />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
