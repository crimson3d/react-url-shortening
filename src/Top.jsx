import React from "react";
import { ReactComponent as Logo } from './assets/logo.svg';

function Top() {
  return (
    <main className="main__top">
      <nav className="top__nav">
        <ul className="nav__left">
          <Logo />

          <li className="left__item">
            <a href="#">Features</a>
          </li>
          <li className="left__item">
            <a href="#">Pricing</a>
          </li>
          <li className="left__item">
            <a href="#">Resources</a>
          </li>
        </ul>
        <ul className="nav__right">
          <li className="right__item">
            <a href="#">Login</a>
          </li>
          <li className="right__item">
            <button className="item__button">Sign Up</button>
          </li>
        </ul>
      </nav>
      <div className="top__content">
        <div className="content__left">
          <h1 className="left__title">More than just shorter links</h1>
          <p className="left__text">
            Build your brand’s recognition and get detailed insights n how your
            links are performing.
          </p>
          <button className="left__button">Get Started</button>
        </div>
        <div className="content__right"></div>
      </div>
      <div className="top__middle">
        <div className="middle__intro">
          <h2 className="intro__title">Advanced Statistics</h2>

          <p className="intro__text">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="middle__cards">
          <div className="cards__card card1">
            <div className="card__pic">
              <img src="../public/icon-brand-recognition.svg" alt="brand" className="pic__icon" />
            </div>
            <h3 className="card__title">Brand Recognition</h3>
            <p>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
          <div className="cards__card card2">
            <div className="card__pic">
              <img src="../public/icon-detailed-records.svg" alt="records" className="pic__icon" />
            </div>
            <h3 className="card__title">Detailed Records</h3>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div className="cards__card card3">
            <div className="card__pic">
              <img src="../public/icon-fully-customizable.svg" alt="customizable" className="pic__icon" />
            </div>
            <h3 className="card__title">Fully Customizable</h3>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
      <div className="top__bottom">
      <h2 className="bottom__title">Boost your links today</h2> <button className="bottom__button">Get Started</button>
      </div>
      <div className="top__footer">
        <Logo />
        <div>
      <h4>Features</h4>

      <h5>Link Shortening</h5>
      <h5>Branded Links</h5>
      <h5>Analytics</h5>
      </div>
      <div>
      <h4>Resources</h4>

      <h5>Blog</h5>
      <h5>Developers</h5>
      <h5>Support</h5>
      </div>
      <div>
      <h4>Company</h4>

      <h5>About</h5>
      <h5>Our Team</h5>
      <h5>Careers</h5>
      <h5>Contact</h5>
      </div>
      </div>
    </main>
  );
}

export default Top;
