import { Fragment } from "react";
import ReactDOM from "react-dom";
// import { navItems } from "../NavItems/navItems";
import  "./Sidebar.css";

const Backdrop = (props) => {
    return <div className="backdrop" onClick={props.onClick}></div>;
  };

  const SidebarOverlay = (props) => {
    return <div className="sidebar">
        {/* <ul>
            {navItems.map((item, index) => <li key={index}>{item}</li>)}
        </ul> */}
    </div>;
  };

  const Sidebar = (props) => {
    const portalDivNode = document.getElementById("overlays");
    return (
      <Fragment>
        {ReactDOM.createPortal(
          <Backdrop onClick={props.onClose} />,
          portalDivNode
        )}
        {ReactDOM.createPortal(
          <SidebarOverlay />,
          portalDivNode
        )}
      </Fragment>
    );
  };

  export default Sidebar;