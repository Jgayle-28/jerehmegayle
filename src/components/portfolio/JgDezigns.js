import React from 'react';
import { Link } from 'react-router-dom';

import jgSketch from '../../img/portfolio/jgDezigns/sketch-jgDez.png';
import mockJg from '../../img/portfolio/jgDezigns/mock-jgDezigns.png';

const JgDezigns = () => {
  return (
    <main className="jg-main content">
      <section className="showcase">
        <h1 className="showcase-head">Jg Dezigns</h1>

        <div className="content-wrapper showcase-wrap">
          <div className="site-display site-display-momentum">
            <div className="site-display">
              <div className="box box-jgDezigns" />
            </div>

            <p className="about-site">
              Jg Dezigns is based off of the concept of me being the web design
              / developement agency. This was a fun project which allowed my
              creativity to flow and it also put my Css animation and Sass
              skills to the test.
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

          <div className="progress-wrap">
            <div className="sketch sketch-momentum">
              <img src={jgSketch} alt="wire frame sketch" />
              <p className="sketch-info">
                During the wireframe sketch session I like to get all the major
                ideas out and to see what looks good and ideal for the web site.
              </p>
            </div>

            <div className="mockup mockup-momentum">
              <img src={mockJg} alt="digital mockup of website" />
              <p className="mockup-info">
                While making the Hi resolution mockup you can begin to see what
                really does work and what does not. At this point we can begin
                to start making adjustments according to your needs.
              </p>
            </div>

            <div className="tech-used">
              <h3 className="tech-used-head">Technology used</h3>
              <p>Html</p>
              <p>sass | css</p>
              <p>Javascript</p>
              <p>sketchapp</p>
              <p>codekit</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default JgDezigns;
