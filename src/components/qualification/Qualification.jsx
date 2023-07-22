import React from "react";
import "./qualification.css";
import { useState } from "react";

function Qualification() {
  const [toggleState, setToggleState] = useState(1);

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => setToggleState(1)}
          >
            <i className="uil uil-graduation-cap  qualification__icon">
              Education
            </i>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => setToggleState(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon">
              Experience
            </i>
          </div>
        </div>

        <div className="qualification__section">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">ACS Institute</h3>
                <span className="qualification__subtitle">VTU-Belgavi</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2020-Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">SIPUC-Kengeri</h3>
                <span className="qualification__subtitle">PU-Board</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2018-2020
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">TCS-Bidadi</h3>
                <span className="qualification__subtitle">CBSE</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2014-2018
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">A1 International</h3>
                <span className="qualification__subtitle">State-Board</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2011-2014
                </div>
              </div>
            </div>
          </div>

          {/* **************************** */}
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Founder</h3>
                <span className="qualification__subtitle">Invoiceapp</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2023-Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">NA</h3>
                <span className="qualification__subtitle">NA</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> NA
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">NA</h3>
                <span className="qualification__subtitle">NA</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> NA
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
