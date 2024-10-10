import { Squash as Hamburger } from 'hamburger-react';
import { useState } from "react";

const MobileMenu = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <div>
            <Hamburger easing='ease-in' color='hsl(0, 0%, 75%)' toggled={isOpen} toggle={setOpen} />
            {isOpen && (
                <nav className='nav__mobile'>
                    <div className='mobile__mobile'>
                        <ul className="mobile__left">
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
                        <hr />
                        <ul className="mobile__right">
                            <li className="right__item">
                                <a href="#">Login</a>
                            </li>
                            <li className="right__item">
                                <button className="item__button">Sign Up</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            )}
        </div>
    )
}

export default MobileMenu;