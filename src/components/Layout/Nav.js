import { Fragment, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

import { navItems } from "./NavItems/navItems";
import Sidebar from "./Sidebar/Sidebar";

import Logo from "../../images/blossom heart.png";

import "./Nav.css";

const Nav = (props) => {
  const [sidebar, showSidebar] = useState(false);

  const showSidebarHandler = () => showSidebar(true);

  const hideSidebarHandler = () => showSidebar(false);

  return (
    <Fragment>
      <div className="nav">
        <div className="logo-div">
          <button className="hamburger" onClick={showSidebarHandler}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <img src={Logo} className="logo" alt="" />
          <div className="logo-text">
            <h3>Blossom Heart Hospital</h3>
          </div>
        </div>

        <ul className="nav-items">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link to={`#${item}`} smooth>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {sidebar && <Sidebar onClose={hideSidebarHandler} />}
    </Fragment>
  );
};

export default Nav;
