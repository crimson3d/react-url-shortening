import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";

const MobileMenu = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <Hamburger
        easing="ease-in"
        color="hsl(0, 0%, 75%)"
        toggled={isOpen}
        toggle={setOpen}
        label="Toggle menu"
      />
      {isOpen && (
        <nav className="nav__mobile" aria-label="Mobile Navigation">
          <div className="mobile__mobile">
            <ul className="mobile__left">
              <li className="left__item">
                <a className="item__mobile" href="#" aria-label="Features">
                  Features
                </a>
              </li>
              <li className="left__item">
                <a className="item__mobile" href="#" aria-label="Pricing">
                  Pricing
                </a>
              </li>
              <li className="left__item">
                <a className="item__mobile" href="#" aria-label="Resources">
                  Resources
                </a>
              </li>
            </ul>
            <hr />
            <ul className="mobile__right">
              <li className="right__item">
                <a className="item__mobile" href="#" aria-label="Login">
                  Login
                </a>
              </li>
              <li className="right__item">
                <button className="item__button" aria-label="Sign Up">Sign Up</button>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </div>
  );
};

export default MobileMenu;
