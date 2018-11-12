import React from 'react';
import { Link } from 'react-router-dom';

import checkmateSketch from '../../img/portfolio/checkmate/sketch-checkmate.png';
import mockCheck from '../../img/portfolio/checkmate/mock-checkmate.png';

const Checkmate = () => {
  return (
    <main className="jg-main content">
      <section className="showcase">
        <h1 className="showcase-head">Check Mate</h1>

        <div className="content-wrapper showcase-wrap">
          <div className="site-display site-display-momentum">
            <div className="site-display">
              <div className="box box-checkmate" />
            </div>

            <p className="about-site">
              Checkmate was inspired by a personal need of my co-workers and I.
              The goal behind Checkmate is to be able to keep track of your
              hours, how much you make, how many days you worked and to be able
              to log notes for the day just in case there any discrepencies with
              your paycheck. Checkmate was built of the back of a previous
              project called the "Miranda Life". This was a really fun project
              for me to build and it sparked my love for React.
              <p>
                <strong>
                  I have temporarly disabled the ability to register
                </strong>
              </p>
              <p>
                Please login with - USER: test@gmail.com | PASS: password123
              </p>
            </p>

            <div className="showcase-nav">
              <a
                href="https://github.com/Jgayle-28/checkmate"
                target="_blank"
                rel="noopener noreferrer"
                className="return-btn fade-link"
              >
                View Code
              </a>

              <div className="final-site final-site-momentum">
                <a
                  href="https://checkmate-2bef9.firebaseapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="final-site final-site-momentum"
                >
                  Live Demo
                </a>
              </div>
              <Link to="/portfolio" className="back">
                Go Back
              </Link>
            </div>
          </div>

          <div className="progress-wrap progress-wrap-checkmate">
            <div className="sketch sketch-momentum">
              <img src={checkmateSketch} alt="wire frame sketch" />
              <p className="sketch-info">
                During the wireframe sketch session I like to get all the major
                ideas out and to see what looks good and ideal for the web site.
              </p>
            </div>

            <div className="mockup mockup-momentum">
              <img src={mockCheck} alt="digital mockup of website" />
              <p className="mockup-info">
                While making the Hi resolution mockup you can begin to see what
                really does work and what does not. At this point we can begin
                to start making adjustments according to your needs.
              </p>
            </div>

            <div className="tech-used">
              <h3 className="tech-used-head">Technology used</h3>
              <p>Html | JSX</p>
              <p>sass | css</p>
              <p>Javascript</p>
              <p>React | Redux</p>
              <p>Firebase</p>
              <p>Material UI</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Checkmate;
