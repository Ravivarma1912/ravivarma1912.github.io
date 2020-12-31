import React, { useState } from "react";
import dark from "./logo/dark-logo.jpg";
import mani from "./logo/profile.jpg";

import db from "../firebase";

const Page = () => {
  const [mail, setMail] = useState([]);
  const [query, setQuery] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (mail !== "" || query !== "") {
      db.collection("contact").add({
        email: mail,
        type: query
      });
    }
    setMail("");
    setQuery("");
  };

  return (
    <div classNameName="all">
      <div className="page1" id="home">
        <div className="circle1" />
        <div className="header" id="home">
          <ul>
            <li>
              <a href="#home">
                <img src={dark} className="logo" alt="" />
              </a>
            </li>
          </ul>
          <nav className="nav">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#project">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="content">
          <img src={mani} className="mani" alt="" />
          <h1>
            <strong>Mani Afranzio</strong>
          </h1>
          <ul className="sample">
            <li>
              <a href="https://github.com/Afranzio">Web Development</a>
            </li>
            <li>
              <a href="https://github.com/Afranzio">Python</a>
            </li>
            <li>
              <a href="https://github.com/Afranzio">Web Scraping</a>
            </li>
            <li>
              <a href="https://github.com/Afranzio">Data Analysis</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="page2">
        <div className="circle2" />
        <div className="about" id="about">
          <h1>
            <strong>About</strong>
          </h1>
          <div className="part">
            <p className="wrap">
              <i className="fa fa-quote-left" aria-hidden="true" />
              I'm a self-taught software developer.
              <br />I have serious passion on <strong>
                Data Analysis
              </strong> and <strong>Web Development. </strong>
              Some of them are shown next.
              <br />I live in Chennai, Tamilnadu, India.
              <i className="fa fa-quote-right" aria-hidden="true" />
            </p>
            <p className="wrap">
              <i className="fa fa-quote-left" aria-hidden="true" />
              And I'll do most satisfying work on your projects.
              <br />
              Just make a chance to new and young developer mind.
              <i className="fa fa-quote-right" aria-hidden="true" />
            </p>
          </div>
        </div>
      </div>
      <div className="page3" id="project">
        <h1>
          <strong>Projects</strong>
        </h1>
        <div className="container">
          <div className="card border-dark mb-3">
            <div className="card-header">Python</div>
            <div className="card-body text-dark">
              <h5 className="card-title">Corona Tracker</h5>
              <a
                className="card-text"
                href="https://github.com/Afranzio/corona_app"
                alt=""
              >
                Corona Tracker using Eel Library
              </a>
              <br/>
              <img
                src="https://pluralsight.imgix.net/paths/python-7be70baaac.png"
                alt=""
              />
            </div>
          </div>
          <div className="card border-dark mb-3">
            <div className="card-header">Data Analysis</div>
            <div className="card-body text-dark">
              <h5 className="card-title">Corona Pandemic</h5>
              <a
                className="card-text"
                href="https://github.com/Afranzio/corona_pandemic"
              >
                Corona Pandemic Graph
              </a>
              <br/>
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </div>
          </div>
          <div className="card border-dark mb-3">
            <div className="card-header">Web Scrapping</div>
            <div className="card-body text-dark">
              <h5 className="card-title">Mobile Analysis </h5>
              <a
                className="card-text"
                href="https://github.com/Afranzio/Scrappy"
              >
                Filpkart's Mobile Analysis{" "}
              </a>
              <br/>
              <img
                src="https://yt3.ggpht.com/a/AATXAJw4nm0WSqhYUSxEuuT9a5U2y87yIwyiihtIXw=s900-c-k-c0xffffffff-no-rj-mo"
                alt=""
              />
            </div>
          </div>
          <div className="card border-dark mb-3">
            <div className="card-header">Web Development</div>
            <div className="card-body text-dark">
              <h5 className="card-title">React Application</h5>
              <a
                className="card-text"
                href="https://reactcoronacards.herokuapp.com"
              >
                Corona Live Tracker
              </a>
              <br/>
              <img
                src="data:image/png;base64,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"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="page4" id="contact">
        <div className="container-last">
          <div className="div-1">
            <i className="fa fa-envelope" />
            <h4>
              Stay Connected
              <i className="fa fa-grin-beam" />
              <div>
                <p className="contactmail">
                  <a href="mailto:afranzio@zohomail.in">afranzio@zohomail.in</a>
                </p>
              </div>
            </h4>
          </div>
          <div className="div-2">
            <form className="form">
              <div className="form-group row">
                <label for="staticEmail" className="col-sm-2 col-form-label">
                  Email
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="mail"
                    value={mail}
                    onChange={(event) => setMail(event.target.value)}
                    placeholder="email@example.com"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="inputPassword" className="col-sm-2 col-form-label">
                  Queries
                </label>
                <div className="col-sm-10">
                  <input
                    type="Query"
                    className="form-control"
                    id="input"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Query"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                SUBMIT
              </button>
            </form>
            <div className="div-2-1">
              <div className="cards text-white bg-dark mb-3">
                <div className="card-header">Instagram</div>
                <div className="card-body">
                  <h5 className="card-title">@afranzio</h5>
                  <a href="https://www.instagram.com/afranzio">
                    <img
                      alt=""
                      src="https://image.flaticon.com/icons/svg/87/87390.svg"
                    />
                  </a>
                </div>
              </div>
              <div className="cards text-white bg-dark mb-3">
                <div className="card-header">linkedin</div>
                <div className="card-body">
                  <h5 className="card-title">Mani Afranzio</h5>
                  <a href="https://www.linkedin.com/in/mani-afranzio-9ba168159">
                    <img
                      alt=""
                      src="https://image.flaticon.com/icons/png/512/61/61109.png"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
