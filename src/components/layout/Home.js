import React from 'react';

export default () => {
  return (
    <main id="home">
      {/* VERTICAL LINES */}
      <div className="vertical-lines vertical-lines-0" id="line-center" />
      <div className="vertical-lines vertical-lines-1" id="line-center" />
      <div className="vertical-lines vertical-lines-2" id="line-center" />
      <div className="vertical-lines vertical-lines-3" id="line-center" />
      <div className="vertical-lines vertical-lines-4" id="line-center" />
      <div className="vertical-lines vertical-lines-5" id="line-center" />
      <div className="vertical-lines vertical-lines-6" id="line-center" />

      {/* PAGE NAV - RIGHT NAV */}
      <div className="right-nav">
        <div className="top-line" />
        <div className="page-text">HOME</div>
        <div className="page-line" />
        <div className="page-line" />
        <div className="page-line" />
        <div className="bottom-line" />
      </div>

      <div className="hero-content">
        <h1 className="lg-heading hero-name">
          Jerehme <span className="hero-name-secondary">Gayle</span>
        </h1>
        <div className="hero-line" />
        <h2 className="sm-heading hero-tagline">
          Front End Web Developer & Designer
        </h2>
      </div>

      <div className="me-bg" />

      <div className="about-red-line about-red-line-1" id="about-line bottom" />
      <div className="about-red-line about-red-line-2" id="about-line bottom" />
    </main>
  );
};
