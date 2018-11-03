import React from 'react';
import about from '../../img/about.png';
import TextLoop from 'react-text-loop';

export default () => {
  return (
    <main id="about">
      <div className="right-nav">
        <div className="top-line" />
        <div className="page-line" />
        <div className="page-line" />
        <div className="page-text">ABOUT</div>
        <div className="page-line" />
        <div className="bottom-line" />
      </div>

      <span className="about-line-left" />

      <div className="about-wrapper">
        <div className="bio">
          {/* ALL TEXT */}
          <div className="bio-content">
            <div className="bio-title-container ">
              <div className="bio-title-bar" />
              <span className="bio-title bio-title-lead">About </span>
              <span className="bio-title"> Me</span>
            </div>

            <h3 className="bio-lead">I like to play where...</h3>
            <h2 className="bio-lead-small">
              {/* design meets development */}
              Code meets design
            </h2>
            <p className="bio-text">
              Hi there, as you probably already know my name is Jerehme. But
              what you didn't know is that I can make a killer meatloaf! All
              jokes aside, I am truly passionate about designing and developing
              the web. I love creating things from scratch and bringing them to
              life with UI effects and animations creating a dynamic user
              experience. I have found my home in React and am currently working
              improving my skills with the MERN stack building personal side
              projects.
            </p>
            <h1 className="heading create-with">
              <span className="create-with-lead">I like to create with</span>
              <TextLoop
                fade={true}
                speed={3300} // springConfig={{ stiffness: 180, damping: 8 }}
              >
                <span className="create-with-skill">Sass</span>
                <span className="create-with-skill">React</span>
                <span className="create-with-skill">Sketch App</span>
                <span className="create-with-skill">Codekit</span>
                <span className="create-with-skill">JavaScript</span>
                <span className="create-with-skill">Material UI</span>
              </TextLoop>
            </h1>
          </div>

          {/* IMAGE & BG GREY */}
          <div className="bio-pic-bg" />
          <div className="bio-pic-bg-1" />
          <div className="bio-pic-container">
            <img src={about} alt="portrait jerehme gayle" className="bio-pic" />
          </div>
        </div>
      </div>

      <div className="about-line-bottom" />
    </main>
  );
};
