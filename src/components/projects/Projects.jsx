import twitter_clone from "../../assets/twitter-clone.png";
import invoiceapp from "../../assets/invoiceapp.png";
import movie_studio from "../../assets/movie-studio.png";
import portfolio from "../../assets/portfolio.png";
import React from "react";
import { BsBroadcast, BsCodeSlash } from "react-icons/bs";
import "./projects.css";
const Projects = () => {
  return (
    <div>
      <section className="skills section" id="projects">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">The projects I build</span>
        <div className="container container_mobile">
          {/* ----------------------------------- */}
          <div className="skills__content">
            <div className="project__flex">
              <h3 className="skills__title mobile">Invoiceapp</h3>
              <div className="project__img">
                <img src={invoiceapp} alt="" />
              </div>
              <div className="project__links mobile">
                <a
                  href="https://github.com/Danish027/invoiceapp"
                  target="_blank"
                >
                  <BsCodeSlash />
                  Code
                </a>
                <a href="https://invoiceapp-xi.vercel.app/" target="_blank">
                  <BsBroadcast />
                  Live
                </a>
              </div>
              <div className="project__details">
                <h3 className="skills__title">Invoiceapp</h3>
                <h3 className="project__description">
                  A full-stack web application built with Next.js, Tailwind CSS,
                  Prisma.io ORM, TypeScript, and Postgress, offering allows you
                  to create and manage invoices easily. It provides features
                  such as creating new invoices, generating estimates, and
                  tracking billing information
                </h3>
                <div className="project__links">
                  <a
                    href="https://github.com/Danish027/invoiceapp"
                    target="_blank"
                  >
                    <BsCodeSlash />
                    Code
                  </a>
                  <a href="https://invoiceapp-xi.vercel.app/" target="_blank">
                    <BsBroadcast />
                    Live
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* ----------------------------------- */}
          <div className="skills__content">
            <div className="project__flex">
              <h3 className="skills__title mobile">Twitter Clone</h3>
              <div className="project__img">
                <img src={twitter_clone} alt="" />
              </div>
              <div className="project__links mobile">
                <a
                  href="https://github.com/Danish027/twitter-next13"
                  target="_blank"
                >
                  <BsCodeSlash />
                  Code
                </a>
                <a
                  href="https://twitter-next13-pmwp1j3sx-danishqes0786-gmailcom.vercel.app/"
                  target="_blank"
                >
                  <BsBroadcast />
                  Live
                </a>
              </div>
              <div className="project__details">
                <h3 className="skills__title">Twitter Clone</h3>
                <h3 className="project__description">
                  A full-stack web application built with Next.js, Tailwind CSS,
                  Prisma.io ORM, TypeScript, and MongoDB, offering real-time
                  updates, user interactions, and responsive design, providing a
                  seamless experience for users to share posts and engage with
                  content.
                </h3>
                <div className="project__links">
                  <a
                    href="https://github.com/Danish027/twitter-next13"
                    target="_blank"
                  >
                    <BsCodeSlash />
                    Code
                  </a>
                  <a
                    href="https://twitter-next13-pmwp1j3sx-danishqes0786-gmailcom.vercel.app/"
                    target="_blank"
                  >
                    <BsBroadcast />
                    Live
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ----------------------------------- */}

          <div className="skills__content">
            <div className="project__flex">
              <h3 className="skills__title mobile">Movie Studio</h3>
              <div className="project__img">
                <img src={movie_studio} alt="" />
              </div>
              <div className="project__links mobile">
                <a
                  href="https://github.com/Danish027/movies-studio"
                  target="_blank"
                >
                  <BsCodeSlash />
                  Code
                </a>
                <a
                  href="https://danish027.github.io/movies-studio/"
                  target="_blank"
                >
                  <BsBroadcast />
                  Live
                </a>
              </div>
              <div className="project__details">
                <h3 className="skills__title">Movie Studio</h3>
                <h3 className="project__description">
                  A dynamic movie searching application developed with React,
                  Redux, JavaScript, and SCSS, integrated with the Movie DB API
                  using Axios, allowing users to explore and discover movie
                  details, cast information, and enjoy a responsive and visually
                  appealing user interface.
                </h3>
                <div className="project__links">
                  <a
                    href="https://github.com/Danish027/movies-studio"
                    target="_blank"
                  >
                    <BsCodeSlash />
                    Code
                  </a>
                  <a
                    href="https://danish027.github.io/movies-studio/"
                    target="_blank"
                  >
                    <BsBroadcast />
                    Live
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ----------------------------------- */}

          <div className="skills__content">
            <div className="project__flex">
              <h3 className="skills__title mobile">Portfolio</h3>
              <div className="project__img">
                <img src={portfolio} alt="" />
              </div>
              <div className="project__links mobile">
                <a
                  href="https://github.com/Danish027/portfolio"
                  target="_blank"
                >
                  <BsCodeSlash />
                  Code
                </a>
                <a
                  href="https://danish027.github.io/portfolio/"
                  target="_blank"
                >
                  <BsBroadcast />
                  Live
                </a>
              </div>
              <div className="project__details">
                <h3 className="skills__title">Portfolio</h3>
                <h3 className="project__description">
                  A professional and user-focused portfolio showcasing projects
                  built with React, JavaScript, Redux, and SCSS, demonstrating
                  clean code, seamless navigation, and interactive design to
                  highlight skills and achievements effectively.
                </h3>
                <div className="project__links">
                  <a
                    href="https://github.com/Danish027/portfolio"
                    target="_blank"
                  >
                    <BsCodeSlash />
                    Code
                  </a>
                  <a
                    href="https://danish027.github.io/portfolio/"
                    target="_blank"
                  >
                    <BsBroadcast />
                    Live
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ----------------------------------- */}
        </div>
      </section>
    </div>
  );
};

export default Projects;
