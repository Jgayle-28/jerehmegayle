import React from 'react';
import { Link } from 'react-router-dom';

import mandySketch from '../../img/portfolio/mandys/sketch-mandys.png';
import mockMandys from '../../img/portfolio/mandys/mock-mandys.png';

const Momentum = () => {
  return (
    <main className="jg-main content">
      <section className="showcase">
        <h1 className="showcase-head">Mandys</h1>

        <div className="content-wrapper showcase-wrap">
          <div className="site-display site-display-momentum">
            <div className="site-display">
              <div className="box box-mandys" />
            </div>

            <p className="about-site">
              The goal of Mandy's was to create a modern/hip feeling yet classy
              an sophisticated web site which would be appealing to all age
              groups. Displaying all avalaible products and services was a
              priority ensuring all visitors could find what they need without
              having to jump through pages to find it.
            </p>

            <div className="showcase-nav">
              <a
                href="https://github.com/Jgayle-28/mandys-raw-code"
                target="_blank"
                rel="noopener noreferrer"
                className="return-btn fade-link"
              >
                View Code
              </a>

              <div className="final-site final-site-momentum">
                <a
                  href="https://mandys.netlify.com/"
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

          <div className="progress-wrap progress-wrap-mandys">
            <div className="sketch sketch-momentum">
              <img src={mandySketch} alt="wire frame sketch" />
              <p className="sketch-info">
                During the wireframe sketch session I like to get all the major
                ideas out and to see what looks good and ideal for the web site.
              </p>
            </div>

            <div className="mockup mockup-momentum">
              <img src={mockMandys} alt="digital mockup of website" />
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

export default Momentum;
