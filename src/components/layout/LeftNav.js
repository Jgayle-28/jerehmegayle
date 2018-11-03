import React from 'react';

export default () => {
  return (
    <div className="left-nav">
      {window.innerWidth > 600 ? (
        <a
          href="mailto:jerehme.gayle@gmail.com"
          className="left-nav-link left-nav-email"
        >
          jerehme.gayle@gmail.com
        </a>
      ) : null}

      <div className="icons left-nav-icons">
        {window.innerWidth < 600 ? (
          <a
            href="https://www.instagram.com/jerehme.gayle/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="far fa-envelope fa-2x" />
          </a>
        ) : null}

        <a
          href="https://www.instagram.com/jerehme.gayle/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram fa-2x" />
        </a>
        <a
          href="https://github.com/Jgayle-28"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github fa-2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/jerehme-gayle-013b9a132/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin fa-2x" />
        </a>
        {/* <a href="https://twitter.com/Jgayle28" target="_blank">
          <i className="fab fa-twitter fa-2x" />
        </a> */}
      </div>
    </div>
  );
};
