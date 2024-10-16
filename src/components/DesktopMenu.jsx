const DesktopMenu = () => {
  return (
    <nav className="nav__desktop" aria-label="Main Navigation">
      <ul className="desktop__left">
        <li className="left__item">
          <a className="item__desktop" href="#" aria-label="Features">
            Features
          </a>
        </li>
        <li className="left__item">
          <a className="item__desktop" href="#" aria-label="Pricing">
            Pricing
          </a>
        </li>
        <li className="left__item">
          <a className="item__desktop" href="#" aria-label="Resources">
            Resources
          </a>
        </li>
      </ul>
      <ul className="desktop__right">
        <li className="right__item">
          <a className="item__desktop" href="#" aria-label="Login">
            Login
          </a>
        </li>
        <li className="right__item">
          <button className="item__button" aria-label="Sign Up">Sign Up</button>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopMenu;
