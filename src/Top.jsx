import Logo from "./assets/logo.svg?react";
import Facebook from "./assets/icon-facebook.svg?react";
import Twitter from "./assets/icon-twitter.svg?react";
import Pinterest from "./assets/icon-pinterest.svg?react";
import Instagram from "./assets/icon-instagram.svg?react";
import UrlShortener from "./UrlShortener.jsx";
import DesktopMenu from "./DesktopMenu.jsx";
import MobileMenu from "./MobileMenu.jsx";

function Top() {
  return (
    <main className="main__top">
      <header className="top__nav">
        <Logo className="nav__logo" />
        <div className="nav__desktop">
          <DesktopMenu />
        </div>
        <div className="nav__mobile">
          <MobileMenu />
        </div>
        </header>
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
      <UrlShortener />
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
              <img
                src="../public/icon-brand-recognition.svg"
                alt="brand"
                className="pic__icon"
              />
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
              <img
                src="../public/icon-detailed-records.svg"
                alt="records"
                className="pic__icon"
              />
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
              <img
                src="../public/icon-fully-customizable.svg"
                alt="customizable"
                className="pic__icon"
              />
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
        <h2 className="bottom__title">Boost your links today</h2>
        <button className="bottom__button">Get Started</button>
      </div>
      <div className="top__footer">
        <Logo fill="white" className="footer__logo" />
        <div className="footer__column">
          <h4 className="column__title">Features</h4>

          <h5 className="column__option">Link Shortening</h5>
          <h5 className="column__option">Branded Links</h5>
          <h5 className="column__option">Analytics</h5>
        </div>
        <div className="footer__column">
          <h4 className="column__title">Resources</h4>

          <h5 className="column__option">Blog</h5>
          <h5 className="column__option">Developers</h5>
          <h5 className="column__option">Support</h5>
        </div>
        <div className="footer__column">
          <h4 className="column__title">Company</h4>

          <h5 className="column__option">About</h5>
          <h5 className="column__option">Our Team</h5>
          <h5 className="column__option">Careers</h5>
          <h5 className="column__option">Contact</h5>
        </div>
        <div className="column__social">
          <Facebook className="social__logo" />
          <Twitter className="social__logo" />
          <Pinterest className="social__logo" />
          <Instagram className="social__logo" />
        </div>
      </div>
    </main>
  );
}

export default Top;
