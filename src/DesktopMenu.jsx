const DesktopMenu = () => {
  return (
    <nav className="nav__desktop">
      <ul className="desktop__left">
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
      <ul className="desktop__right">
        <li className="right__item">
          <a href="#">Login</a>
        </li>
        <li className="right__item">
          <button className="item__button">Sign Up</button>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopMenu;
