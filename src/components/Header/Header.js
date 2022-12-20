import React from "react";
import './Header.css';
import Logo from '../../images/shared/logo.svg';
import {Link, NavLink} from "react-router-dom";

export function Header() {

    return (
        <header className="header">
            <nav className="header__menu">
                <Link to="/">
                    <img src={Logo} alt="space tourism logo"
                         className="header__logo"/>
                </Link>
                <span className="header__line"></span>
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
        </header>
    )
}
