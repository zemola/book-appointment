import {useState} from 'react';

import { Select } from "react-select-states-and-lga-in-nigeria";
import "react-select-states-and-lga-in-nigeria/dist/index.css";

const Form = props => {
    const [email, setEmail] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [state, setState] = useState("");
    const [lga, setLga] = useState("");
  
    const emailChangeHandler = (e) => {
      setEmail(e.target.value);
    };
  
    const firstnameChangeHandler = (e) => {
      setFirstname(e.target.value);
    };
  
    const lastnameChangeHandler = (e) => {
      setLastname(e.target.value);
    };
  
    const phoneChangeHandler = (e) => {
      setPhone(e.target.value);
    };
  
    const addressChangeHandler = (e) => {
      setAddress(e.target.value);
    };
  
    const handleStateChange = (e) => {
      setState(e.target.value);
    };
  
    const handleLgaChange = (e) => {
      setLga(e.target.value);
    };
  
    const submitHandler = (e) => {
      e.preventDefault();
      const url = "https://prod-60.westeurope.logic.azure.com:443/workflows/b0d994885dc74699b807f1fd36783576/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=lA3ZzpbXx6EphtUrghKki5bs-Tc2bjmuGOE-vNYqS50"
      const formData = {
        email:email, firstname:firstname, lastname:lastname, phone:+phone} 
      
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => console.log("submitted"))
        .catch((err) => console.log("failed"));
        
    };
    return (
      <div className="App">
        <div className="form">
          <div className="aside">
            <h4>Blossom Heart Hospital</h4>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder text
              commonly used to demonstrate the visual form of a document or a
              typeface without relying on meaningful content. Lorem ipsum may be
              used as a placeholder before final copy is available.
            </p>
          </div>
          <div>
            <form onSubmit={submitHandler}>
              <h4>Book an appointment</h4>
              <div className="single-input">
                <input
                  placeholder="email"
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={emailChangeHandler}
                />
              </div>
  
              <div className="double-input">
                <input
                  placeholder="First name"
                  type="text"
                  name="first-name"
                  id="first-name"
                  value={firstname}
                  onChange={firstnameChangeHandler}
                />
                <input
                  placeholder="Last name"
                  type="text"
                  name="last-name"
                  id="last-name"
                  value={lastname}
                  onChange={lastnameChangeHandler}
                />
              </div>
  
  
              <div className="double-input">
                <input
                  placeholder="Phone Number"
                  type="number"
                  name="phone-number"
                  id="phone-number"
                  value={phone}
                  onChange={phoneChangeHandler}
                />
                <input
                  placeholder="Address"
                  type="text"
                  name="address"
                  id="address"
                  value={address}
                  onChange={addressChangeHandler}
                />
              </div>
  
              <div className="single-input">
                <Select
                  state={state}
                  lga={lga}
                  changeState={handleStateChange}
                  changeLga={handleLgaChange}
                />
              </div>
  
              <div className="single-input">
                <label>Select Reason</label>
                <select>
                <option  >
                  Select
                </option>
                <option>General Sickness (malaria,typhoid, cough, e.t.c)</option>
                <option>Teens and children sickness</option>
                <option>Cancer problems</option>
                <option>Skin diseases</option>
                <option>Brain and nervous system</option>
                <option>Heart and cadiovascular problems</option>
                <option>Female reproductive organ problems</option>
                <option>Surgery</option>
                <option>Mind/Mental problems</option>
                <option>Older adult sickness</option>
                <option>Respiratory problems</option>
                <option>Eye problems</option>
                <option>Bone and muscle problems</option>
                </select>
              </div>
  
              <button type="submit">Book</button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default Form