import { Fragment } from "react";
import Home from "./components/Home/Home";
// import Nav from "./components/Layout/Nav";
import Navigation from "./components/Layout/NavItems/navItems";

function App() {
  return(
    <Fragment>
      <Navigation />
      {/* <Nav /> */}
      <Home />
    </Fragment>
  )
}

export default App;
