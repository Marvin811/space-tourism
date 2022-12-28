import React from "react";
import './Header.css';
import Logo from '../../images/shared/logo.svg';
import {Link, NavLink} from "react-router-dom";
import {FiMenu} from "react-icons/fi";


export function Header() {
    const handleClick = () => {
        const navbar = document.getElementById('navbar')
        navbar.classList.toggle('header__open')

    }
    return (
        <>
            <header className="header">
                <div className="header__container">
                    <Link to="/">
                        <img src={Logo} alt="space tourism logo"
                             className="header__logo"/>
                    </Link>

                </div>
                <div className="header__line"></div>
                <nav className="header__menu" id="navbar">
                    <ul className="header__list">
                        <li className="header__item header__item_active"><span className="header__link_weight">00</span>
                            <Link className="header__link" to="/">
                                HOME
                            </Link>
                        </li>
                        <li className="header__item">
                            <span className="header__link_weight">01</span>
                            <Link to="/destination" className="header__link">
                                DESTINATION
                            </Link>
                        </li>
                        <li className="header__item"><span className="header__link_weight">02</span>
                            <Link to="/crew" className="header__link">
                                CREW
                            </Link>
                        </li>
                        <li className="header__item"><span className="header__link_weight">03</span>
                            <Link to="/technology" className="header__link">
                                TECHNOLOGY
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="header__menu_mobile">
                    <button id="menu" onClick={handleClick} className="header__button">
                    <FiMenu className="header__fiMenu"/>
                    </button>
                </div>
            </header>
        </>

    )
}
