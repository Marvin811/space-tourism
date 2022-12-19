import './Header.css';
import Logo from '../../images/shared/logo.svg';

export function Header() {
    return (
        <header className="header">
            <nav className="header__menu">
                <a href="/"><img src={Logo} alt="space tourism logo"
                                            className="header__logo"/></a>
                <span className="header__line"></span>
                <ul className="header__list">
                    <li className="header__item header__item_active"><span className="header__link_weight">00</span>
                        <a className="header__link">
                            HOME
                        </a>
                    </li>
                    <li className="header__item"><span className="header__link_weight">01</span>
                        <a className="header__link">
                            DESTINATION
                        </a>
                    </li>
                    <li className="header__item"><span className="header__link_weight">02</span>
                        <a className="header__link">
                            CREW
                        </a>
                    </li>
                    <li className="header__item"><span className="header__link_weight">03</span>
                        <a className="header__link">
                            TECHNOLOGY
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
)
}
