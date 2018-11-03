import React from 'react';
import { Link } from 'react-router-dom';

// import CheckMate from '../../img/CheckMate.png';
import checkMate from '../../img/portfolio/checkmate/checkmate-thumb.png';
// import jgDezigns from '../../img/jgdezigns.png';
import JgDezigns from '../../img/portfolio/jgDezigns/jgDezigns-thumb.png';
// import momentum from '../../img/momentum.png';
import Momentum from '../../img/portfolio/momentum/mom-thumb.png';
// import mandys from '../../img/portfolio/mandys.png';
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

          {/* <span className="contact-title"> My Recent creations</span> */}
        </div>

        <div className="portfolio-tag-line">My Recent Creations</div>

        <div className="project-container">
          <div className="project-wrapper">
            <div className="project-item project-item-1">
              <Link to="/checkmate">
                <img
                  src={checkMate}
                  className="project-image"
                  alt="Check Mate"
                />
                {/* <span>
                  <p>Check mate</p>
                </span> */}
              </Link>
            </div>

            <div className="project-item project-item-2">
              <Link to="/jgDezigns">
                <img
                  src={JgDezigns}
                  className="project-image"
                  alt="Jg Dezigns"
                />
              </Link>
            </div>

            <div className="project-item project-item-3">
              <Link to="/momentum">
                <img src={Momentum} className="project-image" alt="Momentum" />
              </Link>
            </div>

            <div className="project-item project-item-4">
              <Link to="/mandys">
                <img src={mandys} className="project-image" alt="Mandys" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="portfolio-lines portfolio-lines-1" />
      <div className="portfolio-lines portfolio-lines-2" />
      <div className="portfolio-lines portfolio-lines-3" />
      <div className="portfolio-lines portfolio-lines-4" /> */}
      <div className="portfolio-vertical-line portfolio-vertical-line-0" />
      <div className="portfolio-vertical-line portfolio-vertical-line-1" />
      <div className="portfolio-vertical-line portfolio-vertical-line-2" />
      <div className="portfolio-vertical-line portfolio-vertical-line-3" />
      <div className="portfolio-vertical-line portfolio-vertical-line-4" />
    </main>
  );
};
