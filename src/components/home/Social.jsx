import React from "react";

function Social() {
  return (
    <div className="home__social">
      <a
        href="https://instagram.com/"
        target="_blank"
        className="home__social-icon"
      >
        <i class="uil uil-instagram"></i>
      </a>
      <a
        href="https://dribbble.com/"
        target="_blank"
        className="home__social-icon"
      >
        <i class="uil uil-dribbble"></i>
      </a>
      <a
        href="https://github.com/"
        target="_blank"
        className="home__social-icon"
      >
        <i class="uil uil-github-alt"></i>
      </a>
    </div>
  );
}

export default Social;
