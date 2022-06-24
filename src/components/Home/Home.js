import { Fragment, useState } from "react";
import Form from "../Form/Form";
import Modal from "../Modal/Modal";

import Banner from "../../images/banner.png";
import Medicine from "../../images/medicine.png";
import Lab from "../../images/lab.png";
import Firstaid from "../../images/first-aid.png";
import Nurse from "../../images/nurse.png";
import Contact from "../../images/contact.png";

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
        <div className="banner-div" id="Home">
          <div className="banner-desc">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Holistic healthcare</span>{" "}
              <span className="block text-teal-400 xl:inline">for you</span>
            </h1>
            <p className="mt-3 text-base text-black-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              We provide progressive, and affordable healthcare,available online
              for everyone. To us, it’s not just work. We take pride -in the
              timely solutions we deliver.
            </p>
            <button className="action" onClick={showFormHandler}>
              Book appointment
            </button>
          </div>

          <div className="banner-img">
            <img src={Banner} className="banner" alt="blossom-banner" />
          </div>
        </div>

        <div className="service " id="Services">
          <h2>Our services</h2>
          <p className="service-p">
            We provide you with choices best suited to your health needs and{" "}
            make sure you are well attended to by our highly qualified medical
            personnels who are always at your service.
          </p>

          <div className="floated">
            <button className="book-appoint action" onClick={showFormHandler}>
              Book an appointment
            </button>
          </div>

          <div className="card-container">
            <div className="card">
              <img src={Medicine} alt="medicine-jar" />
              <h4>Pharmacy</h4>
              <p>
                Our pharmacy is stocked regularly, to ease purchase of your
                prescribed medications.
              </p>
            </div>
            <div className="card ">
              <img src={Lab} alt="medicine-jar" />
              <h4>Consultation</h4>
              <p>
                Book an appointment in minutes and be assigned to qualified
                doctors for consultation and diagnosis.
              </p>
            </div>
            <div className="card ">
              <img
                className="emergency-img"
                src={Firstaid}
                alt="medicine-jar"
              />
              <h4>Emergency care</h4>
              <p>
                With our shift system, we are available 24/7 to cater to your
                health needs.
              </p>
            </div>
            <div className="card ">
              <img src={Contact} alt="contact" />
              <h4>Lab Test</h4>
              <p>
                Fully-equipped laboratory and qualified lab technicians at your
                service.
              </p>
            </div>
            <div style={{ width: "100%", textAlign: "center" }}>
              <button className="learn">Learn more</button>
            </div>
          </div>
        </div>

        <div className="about" id="About">
          <img src={Nurse} alt="nurses" />
          <div className="about-us">
            <h4>Leading health care Providers</h4>
            <p>
              With our shift system, we are available 24/7 to cater to your
              health needs.
            </p>
            <p className="mt-10">
              <button className="learn">Learn more</button>
            </p>
          </div>
        </div>

        <div className="footer" id="footer">
          <div className="company-name">
            <h4>Blossom Heart Hospital</h4>
            <p>
              Blossom Heart provides progressive, and affordable hearthcare,
              accessible on mobile and online for everyone{" "}
            </p>
            <p>Phone: 09087654312</p>
            <p>blossomheart@gmail.com</p>
          </div>
          <div className="footer-item">
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Testimonials </li>
              <li>services</li>
              <li>Home</li>
            </ul>
          </div>
          <div className="footer-item">
            <h4>Region</h4>
            <ul>
              <li>Nigeria</li>
            </ul>
          </div>
          <div className="footer-item">
            <h4>Help</h4>
            <ul>
              <li>Help center</li>
              <li>Contact support </li>
              <li>Instructions</li>
              <li>How it works</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copywright">
        <p>&copy; Blossom Heart Hospital</p>
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
