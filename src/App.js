import { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Nav from "./components/Layout/Nav";

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Nav />
        <Home />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
