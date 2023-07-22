import React from "react";
import "./footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Danish</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#project" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonial
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://instagram.com/"
            target="_blank"
            className="footer__social-link"
          >
            <i class="bx bxl-instagram"></i>
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            className="footer__social-link"
          >
            <i class="bx bxl-facebook"></i>
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            className="footer__social-link"
          >
            <i class="bx bxl-twitter"></i>
          </a>
        </div>
        <span className="footer__copy">&#169; Danish. All rights reserved</span>
      </div>
    </footer>
  );
}

export default Footer;
