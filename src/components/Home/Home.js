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
        <header>
          <div className="logo-div">
            <img src={Logo} className="logo" alt="" />
            <div className="logo-text">
            <h3>
              Blossom Heart Hospital
            </h3>
            <h6 className="sub">....Healthcare that is convenient and affordable</h6>
            </div>
          </div>
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              class="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
            <ul className="nav flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-teal-500 md:text-teal-500 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-teal-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-teal-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-teal-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-teal-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </header>

        <div className="banner-div">
          <div className="banner-desc">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Wholistic healthcare</span>{" "}
              <span className="block text-teal-400 xl:inline">for you</span>
            </h1>
            <p className="mt-3 text-base text-black-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              We provide progressive, and affordable healthcare,available online
              for everyone. To us, it’s not just work. We take pride -in the
              timely solutions we deliver.
            </p>
            <button
              className="action w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-400 hover:bg-teal-700 md:py-4 md:text-lg md:px-10"
              onClick={showFormHandler}
            >
              Book appointment
            </button>
          </div>

          <div className="banner-img">
            <img src={Banner} className="banner" alt="blossom-banner" />
          </div>
        </div>

        <div className="service ">
          <h3 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-3l md:text-2l">
            Our services
          </h3>
          <p className=" text-base text-black-500  sm:text-lg">
            We provide you with choices best suited to your health needs and{" "}
            make sure you are well attended to by our highly qualified medical
            personnels who are always at your service.
          </p>

          <div className="card-container">
            <div className="card block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <img src={Medicine} alt="medicine-jar" />
              <h4>Pharmacy</h4>
              <p>
                Our pharmacy is stocked regularly, to ease purchase of your
                prescribed medications.
              </p>
            </div>
            <div className="card block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <img src={Lab} alt="medicine-jar" />
              <h4>Consultation</h4>
              <p>
                Book an appointment in minutes and be assigned to qualified
                doctors for consultation and diagnosis.
              </p>
            </div>
            <div className="card block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <img src={Firstaid} alt="medicine-jar" />
              <h4>Emergency care</h4>
              <p>
                With our shift system, we are available 24/7 to cater to your
                health needs.
              </p>
            </div>
            <div className="card block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <img src={Contact} alt="contact" />
              <h4>Lab Test</h4>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the
              </p>
            </div>
            <div className="mt-10" style={{ width: "100%", textAlign: "center" }}>
              <button className="learn">Learn more</button>
            </div>
          </div>
        </div>

        <div className="about">
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

        <div className="footer">
          <h2>What our customers are saying</h2>
          <div className="feed">
            <figure>
              <img src={Avatar} alt="" />
              <figcaption>Chinonso Andrew</figcaption>
            </figure>
            <p style={{ textAlign: "left" }}>
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
