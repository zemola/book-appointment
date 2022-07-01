import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Nav from "./components/Layout/Nav";

import './App.css'

function App() {
  const [darkmode, setDarkMode] = useState(false);

  const darkChangeHandler = (e) => setDarkMode(prevState => !prevState)
  return (
    <BrowserRouter>
      <div className={darkmode === true ? "app-container" : ""}>
        <Nav darkmode ={darkmode}/>
        <div className="switch-container">
          <label class="switch">
            <input type="checkbox" className="switch-input"  onChange={darkChangeHandler}/>
            <span class="slider round"></span>
           
          </label>
          {darkmode === true ? <span className="span">dark</span> : <span className="span">light</span>}

        </div>
        <Home darkmode ={darkmode}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
