import { useState } from "react";

import { Select } from "react-select-states-and-lga-in-nigeria";
import "react-select-states-and-lga-in-nigeria/dist/index.css";

import Success from "../../images/success.png";
import "./Form.css";

const Form = (props) => {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [dob, setDob] = useState("");
  const [lga, setLga] = useState("");
  const [gender, setGender] = useState("");
  const [reason, setReason] = useState("");
  const [sucess, showSucess] = useState(false);

  //input changeHandlers
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const dobChangeHandler = (e) => {
    setDob(e.target.value);
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

  const formIsIncomplete =
    email === "" ||
    firstname === "" ||
    lastname === "" ||
    phone === "" ||
    reason === "" ||
    gender === "" ||
    dob === "";

  const submitHandler = (e) => {
    e.preventDefault();

    const dep = reason.split("(");
    const dept = dep[1].split(")");
    const department = dept[0];

    const url =
      "https://prod-60.westeurope.logic.azure.com:443/workflows/b0d994885dc74699b807f1fd36783576/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=lA3ZzpbXx6EphtUrghKki5bs-Tc2bjmuGOE-vNYqS50";
    const formData = {
      email: email,
      firstname: firstname,
      lastname: lastname,
      phone: +phone,
      reason: department,
      gender: gender,
      dateOfBirth: dob,
      address: `${address} ${lga} ${state}`,
      source: "website",
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
        <div className="close-div">
          <button className="close" onClick={props.onClose}>
            X
          </button>
        </div>
      </div>
      {!sucess && (
        <form onSubmit={submitHandler}>
          <h3>Book an appointment</h3>
          <p>
            <small>Fill all inputs marked *</small>
          </p>

          <div className="single-input">
            <label>*Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={emailChangeHandler}
            />
          </div>

          <div className="double-input">
            <div>
              <label>*First Name</label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                value={firstname}
                onChange={firstnameChangeHandler}
              />
            </div>

            <div>
              <label>*Last Name</label>
              <input
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
              <label>*Phone number</label>
              <input
                type="number"
                name="phone-number"
                id="phone-number"
                value={phone}
                onChange={phoneChangeHandler}
              />
            </div>

            <div>
              <label>*Address</label>
              <input
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

          <div
            className="single-input"
          >
            <label>*Date of Birth</label>
            <input
              type="date"
              name="dob"
              id="dob"
              value={dob}
              onChange={dobChangeHandler}
            />
          </div>

          <div className="double-input">
            <div>
              <label>*Select Reason</label>
              <select value={reason} onChange={handleReasonChange}>
                <option>Select</option>
                <option>General Symptoms (General Physician)</option>
                <option>Teens and children sickness(Pediatrics)</option>
                <option>
                  Female reproductive organ problems(Gynecologist)
                </option>
                <option>Tooth problems(Dentist)</option>
                <option>Bone problems(Orthopaedics)</option>
              </select>
            </div>

            <div>
              <label>*Gender</label>
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
            <button type="submit" className="book" disabled={formIsIncomplete}>
              Book appointment
            </button>
          </div>
        </form>
      )}
      {sucess && (
        <div className="success">
          <img src={Success} height="100rem" width="100rem" alt="" />
          <p>
            Your booking was successful. Check your email for more information
          </p>
        </div>
      )}
    </div>
  );
};

export default Form;
