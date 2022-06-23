import React from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";



 
 
  function Navigation() {
   return (
     <BrowserRouter>
     <div>
        <Link to ='#Home'>Home</Link>
        <Link to ='#service' smooth>Services</Link>
        <Link to ='#About' smooth>About</Link>
        <Link to ='#Contact' smooth>Contact</Link>
     </div>
     </BrowserRouter>
   )
 }


 export default Navigation;
 