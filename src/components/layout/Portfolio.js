import React from 'react';
import { Link } from 'react-router-dom';

import checkMate from '../../img/portfolio/checkmate/checkmate-thumb.png';
import JgDezigns from '../../img/portfolio/jgDezigns/jgDezigns-thumb.png';
import Momentum from '../../img/portfolio/momentum/mom-thumb.png';
import mandys from '../../img/portfolio/mandys/mandys-thumb.png';

export default () => {
  return (
    <main className="portfolio">
      <div className="right-nav">
        <div className="top-line" />
        <div className="page-line" />
        <div className="page-text">PORTFOLIO</div>
        <div className="page-line" />
        <div className="page-line" />
        <div className="bottom-line" />
      </div>

      <div className="portfolio-wrapper">
        <div className="portfolio-title-container">
          <div className="portfolio-title-bar" />
          <span className="portfolio-title">Portfolio </span>
        </div>

        <div className="portfolio-tag-line">My Recent Creations</div>

        {/* Projects Container */}
        <div className="project-container">
          <div className="project-wrapper">
            {/* Checkmate */}
            <Link to="/checkmate">
              <div className="project-item project-item-1">
                <img
                  src={checkMate}
                  className="project-image"
                  alt="Check Mate"
                />

                <div className="image-overlay image-overlay-checkmate">
                  <span className="plus">
                    <div className="plus-line-1" />
                    <div className="plus-line-2" />
                  </span>
                  <span>
                    <p className="image-overlay-arrow image-overlay-arrow-checkmate" />
                    <p className="image-overlay-title image-overlay-title-checkmate">
                      Check Mate
                    </p>
                  </span>
                </div>
              </div>
            </Link>

            {/* Jg Dezigns */}
            <Link to="/jgDezigns">
              <div className="project-item project-item-2">
                <img
                  src={JgDezigns}
                  className="project-image"
                  alt="Jg Dezigns"
                />

                <div className="image-overlay image-overlay-jgDezigns">
                  <span className="plus">
                    <div className="plus-line-1" />
                    <div className="plus-line-2" />
                  </span>
                  <span>
                    <p className="image-overlay-arrow image-overlay-arrow-jgDezigns" />
                    <p className="image-overlay-title image-overlay-title-jgDezigns">
                      Jg Dezigns
                    </p>
                  </span>
                </div>
              </div>
            </Link>

            {/* Momentum */}
            <Link to="/momentum">
              <div className="project-item project-item-3">
                <img src={Momentum} className="project-image" alt="Momentum" />
                <div className="image-overlay image-overlay-momentum">
                  <span className="plus">
                    <div className="plus-line-1" />
                    <div className="plus-line-2" />
                  </span>
                  <span>
                    <p className="image-overlay-arrow image-overlay-arrow-momentum" />
                    <p className="image-overlay-title image-overlay-title-momentum">
                      Momentum
                    </p>
                  </span>
                </div>
              </div>
            </Link>

            {/* Mandys */}
            <Link to="/mandys">
              <div className="project-item project-item-4">
                <img src={mandys} className="project-image" alt="Mandys" />
                <div className="image-overlay image-overlay-mandys">
                  <span className="plus">
                    <div className="plus-line-1" />
                    <div className="plus-line-2" />
                  </span>
                  <span>
                    <p className="image-overlay-arrow image-overlay-arrow-mandys" />
                    <p className="image-overlay-title image-overlay-title-mandys">
                      Mandys
                    </p>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="portfolio-vertical-line portfolio-vertical-line-0" />
      <div className="portfolio-vertical-line portfolio-vertical-line-1" />
      <div className="portfolio-vertical-line portfolio-vertical-line-2" />
      <div className="portfolio-vertical-line portfolio-vertical-line-3" />
      <div className="portfolio-vertical-line portfolio-vertical-line-4" />
    </main>
  );
};
