import "./App.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import Logo from "./assets/logo.svg?react";
import Facebook from "./assets/icon-facebook.svg?react";
import Twitter from "./assets/icon-twitter.svg?react";
import Pinterest from "./assets/icon-pinterest.svg?react";
import Instagram from "./assets/icon-instagram.svg?react";
import UrlShortener from "./components/UrlShortener.jsx";
import DesktopMenu from "./components/DesktopMenu.jsx";
import MobileMenu from "./components/MobileMenu.jsx";

const Header = () => (
  <header className="top__nav" role="banner">
    <Logo className="nav__logo" aria-label="Company Logo" />
    <nav className="nav__desktop" aria-label="Main Navigation">
      <DesktopMenu />
    </nav>
    <nav className="nav__mobile" aria-label="Mobile Navigation">
      <MobileMenu />
    </nav>
  </header>
);

const Content = () => (
  <div className="top__content">
    <div className="content__left">
      <h1 className="left__title">More than just shorter links</h1>
      <p className="left__text">
        Build your brand’s recognition and get detailed insights on how your
        links are performing.
      </p>
      <button className="left__button" tabIndex="0" role="button" aria-pressed="false">Get Started</button>
    </div>
    <div className="content__right"></div>
  </div>
);

const MiddleSection = () => (
  <div className="top__middle">
    <UrlShortener />
    <div className="middle__intro">
      <h2 className="intro__title">Advanced Statistics</h2>
      <p className="intro__text">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
    </div>
    <div className="middle__cards ">
      {[
        {
          imgSrc: "/icon-brand-recognition.svg",
          alt: "Brand Recognition Icon",
          title: "Brand Recognition",
          text: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
        },
        {
          imgSrc: "/icon-detailed-records.svg",
          alt: "Detailed Records Icon",
          title: "Detailed Records",
          text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
        },
        {
          imgSrc: "/icon-fully-customizable.svg",
          alt: "Fully Customizable Icon",
          title: "Fully Customizable",
          text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
        },
      ].map((card, index) => (
        <div className={`cards__card card${index + 1}`} key={index}>
          <div className="card__pic">
            <img src={card.imgSrc} alt={card.alt} className="pic__icon" />
          </div>
          <h3 className="card__title">{card.title}</h3>
          <p className="card__text">{card.text}</p>
        </div>
      ))}
    </div>
  </div>
);

const Footer = () => (
  <div className="top__footer">
    <Logo fill="white" className="footer__logo" aria-label="Company Logo" />
    {[
      {
        title: "Features",
        options: ["Link Shortening", "Branded Links", "Analytics"],
      },
      {
        title: "Resources",
        options: ["Blog", "Developers", "Support"],
      },
      {
        title: "Company",
        options: ["About", "Our Team", "Careers", "Contact"],
      },
    ].map((column, index) => (
      <div className="footer__column" key={index}>
        <h4 className="column__title">{column.title}</h4>
        {column.options.map((option, idx) => (
          <a href="#" className="column__option" key={idx}>
            {option}
          </a>
        ))}
      </div>
    ))}
    <div className="column__social">
      <Facebook className="social__logo" aria-label="Facebook" />
      <Twitter className="social__logo" aria-label="Twitter" />
      <Pinterest className="social__logo" aria-label="Pinterest" />
      <Instagram className="social__logo" aria-label="Instagram" />
    </div>
  </div>
);

function App() {
  return (
    <main className="main__top">
      <Header />
      <Content />
      <MiddleSection />
      <div className="top__bottom">
        <h2 className="bottom__title">Boost your links today</h2>
        <button className="bottom__button" tabIndex="0" role="button" aria-pressed="false">Get Started</button>
      </div>
      <Footer />
    </main>
  );
}

export default App;
