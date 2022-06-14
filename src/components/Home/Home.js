import { Fragment, useState } from "react";
import Form from "../Form/Form";
import Modal from "../Modal/Modal";

import Banner from "../../images/banner.png";
import Logo from "../../images/blossom heart.png";
import Medicine from "../../images/medicine.png";
import Lab from "../../images/lab.png";
import Firstaid from "../../images/first-aid.png";
import Nurse from "../../images/nurse.png";
import Avatar from "../../images/avatar.png";

import "./Home.css";

const Home = (props) => {
  const [form, showForm] = useState(false);

  const showFormHandler = () => {
    showForm(true);
  };

  const hideFormHandler = () => {
    showForm(false);
  };

  return (
    <Fragment>
      <div className="container">
        <header>
          <div className="logo-div">
            <img src={Logo} className="logo" alt="" />
            <h3>Blossom Heart Hospital</h3>
          </div>

          <ul className="nav">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Nav</li>
          </ul>
        </header>

        <div className="banner-div">
          <div className="banner-desc">
            <h3>Virtual Health care for you</h3>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available.
            </p>
            <button className="action" onClick={showFormHandler}>
              Book appointment
            </button>
          </div>

          <div className="banner-img">
            <img src={Banner} className="banner" alt="blossom-banner" />
          </div>
        </div>

        <div className="service">
          <h3>Our services</h3>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available.
          </p>

          <div className="card-container">
            <div className="card">
              <img src={Medicine} alt="medicine-jar" />
              <h4>Online pharmacy</h4>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the
              </p>
            </div>
            <div className="card">
              <img src={Lab} alt="medicine-jar" />
              <h4>Consultation</h4>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the
              </p>
            </div>
            <div className="card">
              <img src={Firstaid} alt="medicine-jar" />
              <h4>Emergency care</h4>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the
              </p>
            </div>
            <div className="card">
              <img src={Medicine} alt="medicine-jar" />
              <h4>Online pharmacy</h4>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the
              </p>
            </div>
            <div style={{ width: "100%", textAlign: "center" }}>
              <button className="learn">Learn more</button>
            </div>
          </div>
        </div>

        <div className="about">
          <img src={Nurse} alt="nurses" />
          <div className="about-us">
            <h4>Leading health care Providers</h4>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the
            </p>
            <p>
              <button className="learn">Learn more</button>
            </p>
          </div>
        </div>

        <div className="footer">
          <h2>What our customers are saying</h2>
          <div className="feed">
            <figure>
              <img src={Avatar} alt="" />
              <figcaption>Chinonso Andrew</figcaption>
            </figure>
            <p style={{ textAlign: "left", width: "40%" }}>
              "In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the In publishing and graphic
              design, Lorem ipsum is a placeholder text commonly used to
              demonstrate the"
            </p>
          </div>
        </div>
      </div>

      {form && (
        <Modal onClose={hideFormHandler}>
          <Form onClose={hideFormHandler} />
        </Modal>
      )}
    </Fragment>
  );
};

export default Home;
