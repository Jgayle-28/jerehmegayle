import React from 'react';
import { Link } from 'react-router-dom';

import checkMate from '../../img/portfolio/checkmate/checkmate-thumb.png';
import JgDezigns from '../../img/portfolio/jgDezigns/jgDezigns-thumb.png';
import Momentum from '../../img/portfolio/momentum/mom-thumb.png';
import mandys from '../../img/portfolio/mandys/mandys-thumb.png';

const Portfolio = () => {
  const projects = [
    {
      img: checkMate,
      to: '/checkmate',
      projectUrl: 'project-item-1',
      overlayUrl: 'image-overlay-checkmate',
      name: 'Check mate'
    },
    {
      img: JgDezigns,
      to: '/jgDezigns',
      projectUrl: 'project-item-2',
      overlayUrl: 'image-overlay-jgDezigns',
      name: 'Jg Dezigns'
    },
    {
      img: Momentum,
      to: '/momentum',
      projectUrl: 'project-item-3',
      overlayUrl: 'image-overlay-momentum',
      name: 'Momentum'
    },
    {
      img: mandys,
      to: '/mandys',
      projectUrl: 'project-item-4',
      overlayUrl: 'image-overlay-mandys',
      name: 'Mandys'
    }
  ];

  return (
    <main className="portfolio">
      {/* Right Navbar */}
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
            {projects.map((project, i) => (
              <Link to={project.to} key={i}>
                <div className={`project-item ${project.projectUrl}`}>
                  <img
                    src={project.img}
                    className="project-image"
                    alt={project.name}
                  />
                  {/* Image overlay */}
                  <div className={`image-overlay ${project.overlayUrl}`}>
                    {/* Plus */}
                    <span className="plus">
                      <div className="plus-line-1" />
                      <div className="plus-line-2" />
                    </span>
                    {/* Arrow */}
                    <span>
                      <div className="image-overlay-arrow " />
                      <p className="image-overlay-title ">{project.name}</p>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* Project lines */}
      <div className="portfolio-vertical-line portfolio-vertical-line-0" />
      <div className="portfolio-vertical-line portfolio-vertical-line-1" />
      <div className="portfolio-vertical-line portfolio-vertical-line-2" />
      <div className="portfolio-vertical-line portfolio-vertical-line-3" />
      <div className="portfolio-vertical-line portfolio-vertical-line-4" />
    </main>
  );
};

export default Portfolio;
