import React, { useState } from "react";
import "./services.css";
function Services() {
  const [toggleState, setToggleState] = useState(0);

  function toggleTab(index) {
    setToggleState(index);
  }
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid service__icon"></i>
            <h3 className="services__title">
              Web Page <br /> Design
            </h3>
            <span className="services__icon" onClick={() => toggleTab(1)}>
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div
              className={
                toggleState === 1
                  ? "service__modal active-model"
                  : "service__modal"
              }
            >
              <div className="services__model-content">
                <i
                  className="uil uil-times services__modal-close"
                  onClick={() => toggleTab(0)}
                ></i>
                <h3 className="services__model-title">Product Designer</h3>
                <p className="service__model-description">
                  Service with more than 3 years of Experiance. Providing
                  Quality work to clients and Companies.
                </p>
                <ul className="services__model-services grid">
                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                      I develop the user interface
                    </p>
                  </li>
                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                      I develop the web page
                    </p>
                  </li>
                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                      I create the ux element interaction.
                    </p>
                  </li>
                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                      I position your company brand.
                    </p>
                  </li>
                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                      I design and mockup the products for Companies.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow service__icon"></i>
            <h3 className="services__title">
              UI/UX <br /> Designer
            </h3>
            <span className="services__icon">
              View More
              <i
                onClick={() => toggleTab(2)}
                className="uil uil-arrow-right services__button-icon"
              ></i>
            </span>

            <div
              className={
                toggleState === 2
                  ? "service__modal active-model"
                  : "service__modal"
              }
            >
              <div className="services__model-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services__modal-close"
                ></i>
                <h3 className="services__model-title">UI/UX Designer</h3>
                <p className="service__model-description">
                  Service with more than 3 years of Experiance. Providing
                  Quality work to clients and Companies.
                </p>
                <ul className="services__model-services grid">
                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                      I develop the user interface
                    </p>
                  </li>
                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                      I develop the web page
                    </p>
                  </li>
                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                      I create the ux element interaction.
                    </p>
                  </li>
                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                      I position your company brand.
                    </p>
                  </li>
                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                      I design and mockup the products for Companies.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit service__icon"></i>
            <h3 className="services__title">
              API <br /> Designer
            </h3>
            <span className="services__icon">
              View More
              <i
                onClick={() => toggleTab(3)}
                className="uil uil-arrow-right services__button-icon"
              ></i>
            </span>

            <div
              className={
                toggleState === 3
                  ? "service__modal active-model"
                  : "service__modal"
              }
            >
              <div className="services__model-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services__modal-close"
                ></i>
                <h3 className="services__model-title">Visual Designer </h3>
                <p className="service__model-description">
                  Service with more than 3 years of Experiance. Providing
                  Quality work to clients and Companies.
                </p>
                <ul className="services__model-services grid">
                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                      I develop the user interface
                    </p>
                  </li>
                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                      I develop the web page
                    </p>
                  </li>
                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                      I create the ux element interaction.
                    </p>
                  </li>
                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                      I position your company brand.
                    </p>
                  </li>
                  <li className="services__model-service">
                    <i className="uil uil-check-circle services__model-icon"></i>
                    <p className="services__model-info">
                      I design and mockup the products for Companies.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
