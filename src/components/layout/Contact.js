import React from 'react';

export default () => {
  return (
    <main className="contact">
      <div className="right-nav">
        <div className="top-line" />
        <div className="page-line" />
        <div className="page-line" />
        <div className="page-line" />
        <div className="page-text">CONTACT</div>
        <div className="bottom-line" />
      </div>

      <div className="contact-wrapper">
        <div className="alt-contact-wrapper">
          {/* STYLES INHERITED FROM ABOUT SCSS */}
          <div className="contact-title-container ">
            <div className="contact-title-bar" />
            <span className="contact-title bio-title-lead">LETS </span>
            <span className="contact-title"> TALK</span>
          </div>

          <div className="contact-words">
            <p className="contact-words-right">What Can I</p>
            <p className="contact-words-left">Do For You</p>
          </div>
        </div>

        <div className="form-wrapper">
          <form
            action="https://formspree.io/jerehme.gayle@gmail.com"
            method="POST"
            className="form"
          >
            <div className="form__group form__group-1">
              <input
                type="text"
                className="form__input"
                placeholder="Full name"
                id="name"
                required
                name="user-name"
              />
              <label htmlFor="name" className="form__label">
                FULL NAME
              </label>
            </div>

            <div className="form__group form__group-2">
              <input
                type="email"
                className="form__input"
                placeholder="Email address"
                id="email"
                required
                name="_replyto"
              />
              <label htmlFor="email" className="form__label">
                EMAIL ADDRESS
              </label>
            </div>

            <div className="form__group form__group-3">
              <textarea
                className="form__input"
                id="t-area"
                name="user-message"
                rows="8"
                cols="50"
                placeholder="WHAT WOULD YOU LIKE TO CREATE"
              />
              <label htmlFor="t-area" className="form__label" />
            </div>

            <div className="form__group form__group-4">
              <input type="submit" className="form__btn" value="Send Message" />
            </div>
          </form>
        </div>
      </div>
      <div className="contact-lines contact-lines-1" />
      <div className="contact-lines contact-lines-2" />

      {/* VERTICAL LINES */}
      {/* <div
        className="contact-vertical-lines contact-vertical-lines-0"
        id="line-center"
      />
      <div
        className="contact-vertical-lines contact-vertical-lines-1"
        id="line-center"
      />
      <div
        className="contact-vertical-lines contact-vertical-lines-2"
        id="line-center"
      />
      <div
        className="contact-vertical-lines contact-vertical-lines-3"
        id="line-center"
      />
      <div
        className="contact-vertical-lines contact-vertical-lines-4"
        id="line-center"
      />
      <div
        className="contact-vertical-lines contact-vertical-lines-5"
        id="line-center"
      />
      <div
        className="contact-vertical-lines contact-vertical-lines-6"
        id="line-center"
      /> */}
    </main>
  );
};
