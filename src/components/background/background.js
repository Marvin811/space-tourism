import homeDesktop from '../../images/home/background-home-desktop.jpg';
import homeTablet from '../../images/home/background-home-tablet.jpg';
import homeMobile from '../../images/home/background-home-mobile.jpg';

export default function background(name) {
    let backgroundDesktop, backgroundTablet, backgroundMobile

    switch (name) {
        case 'home':
            backgroundDesktop = `url(${homeDesktop})`;
            backgroundTablet = `url(${homeTablet})`;
            backgroundMobile = `url(${homeMobile})`;
            break;
    }
    document.documentElement.style.setProperty(
        "--background-desktop", backgroundDesktop
    );
    document.documentElement.style.setProperty(
        "--background-tablet", backgroundTablet
    );
    document.documentElement.style.setProperty(
        "--background-mobile", backgroundMobile
    );
}