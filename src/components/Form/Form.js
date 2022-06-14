import { useState } from "react";

import { Select } from "react-select-states-and-lga-in-nigeria";
import "react-select-states-and-lga-in-nigeria/dist/index.css";

import Logo from "../../images/blossom heart.png";
import Success from "../../images/success.png";
import "./Form.css";

const Form = (props) => {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [lga, setLga] = useState("");
  const [gender, setGender] = useState("");
  const [reason, setReason] = useState("");
  const [sucess, showSucess] = useState(false);
  const [error, setError] = useState("");

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

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleReasonChange = (e) => {
    setReason(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setError("");
    if (
      email === "" ||
      firstname === "" ||
      lastname === "" ||
      phone === "" ||
      address === "" ||
      state === "" ||
      lga === "" ||
      reason === "" ||
      gender === ""
    ) {
      setError("select All inputs");
      return;
    }

    const url =
      "https://prod-60.westeurope.logic.azure.com:443/workflows/b0d994885dc74699b807f1fd36783576/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=lA3ZzpbXx6EphtUrghKki5bs-Tc2bjmuGOE-vNYqS50";
    const formData = {
      email: email,
      firstname: firstname,
      lastname: lastname,
      phone: +phone,
      reason: reason,
      gender: gender,
      address: `${address} ${lga} ${state}`,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => showSucess(true))
      .catch((err) => console.log("failed"));
  };
  return (
    <div className="form">
      <div className="header">
        <div className="logo-div-form">
          <img src={Logo} className="logo" alt="" />
          <h3>Blossom Heart Hospital</h3>
        </div>
        <button className="close" onClick={props.onClose}>
          X
        </button>
      </div>
      {!sucess && (
        <form onSubmit={submitHandler}>
          {error && <small>Please fill all inputs</small>}
          <div className="single-input">
            <label>Email</label>
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
            <div>
              <label>First Name</label>
              <input
                placeholder="First name"
                type="text"
                name="first-name"
                id="first-name"
                value={firstname}
                onChange={firstnameChangeHandler}
              />
            </div>

            <div>
              <label>Last Name</label>
              <input
                placeholder="Last name"
                type="text"
                name="last-name"
                id="last-name"
                value={lastname}
                onChange={lastnameChangeHandler}
              />
            </div>
          </div>

          <div className="double-input">
            <div>
              <label>Phone number</label>
              <input
                placeholder="Phone Number"
                type="number"
                name="phone-number"
                id="phone-number"
                value={phone}
                onChange={phoneChangeHandler}
              />
            </div>

            <div>
              <label>Address</label>
              <input
                placeholder="Address"
                type="text"
                name="address"
                id="address"
                value={address}
                onChange={addressChangeHandler}
              />
            </div>
          </div>

          <div className="single-input">
            <Select
              state={state}
              lga={lga}
              changeState={handleStateChange}
              changeLga={handleLgaChange}
            />
          </div>

          <div className="double-input">
            <div>
              <label>Select Reason</label>
              <select value={reason} onChange={handleReasonChange}>
                <option>Select</option>
                <option>
                  General Sickness (malaria,typhoid, cough, e.t.c)
                </option>
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

            <div>
              <label>Gender</label>
              <select value={gender} onChange={handleGenderChange}>
                <option>Select</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>

          <div
            style={{
              width: "100%",
              textAlign: "right",
              padding: "1rem",
              boxSizing: "border-box",
            }}
          >
            <button type="submit" className="book">
              Book appointment
            </button>
          </div>
        </form>
      )}
      {sucess && (
        <div style={{ textAlign: "center" }}>
          <img src={Success} height="40%" width="40%" alt="" />
          <p>
            Your booking was successful. Check your email form more information
          </p>
        </div>
      )}
    </div>
  );
};

export default Form;
