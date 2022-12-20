//home page
import homeDes from '../../images/home/background-home-desktop.jpg';
import homeTab from '../../images/home/background-home-tablet.jpg';
import homeMob from '../../images/home/background-home-mobile.jpg';
//destination page
import destinationDes from '../../images/destination/background-destination-desktop.jpg';
import destinationTab from '../../images/destination/background-destination-tablet.jpg';
import destinationMob from '../../images/destination/background-destination-mobile.jpg';
//crew page
import crewDes from '../../images/crew/background-crew-desktop.jpg';
import crewTab from '../../images/crew/background-crew-tablet.jpg';
import crewMob from '../../images/crew/background-crew-mobile.jpg';
//technology page
import technologyDes from '../../images/technology/background-technology-desktop.jpg';
import technologyTab from '../../images/technology/background-technology-tablet.jpg';
import technologyMob from '../../images/technology/background-technology-mobile.jpg';


export default function background(name) {
    let backgroundDesktop, backgroundTablet, backgroundMobile

    switch (name) {
        case 'home':
            backgroundDesktop = `url(${homeDes})`;
            backgroundTablet = `url(${homeTab})`;
            backgroundMobile = `url(${homeMob})`;
            break;

        case 'destination':
            backgroundDesktop = `url(${destinationDes})`;
            backgroundTablet = `url(${destinationTab})`;
            backgroundMobile = `url(${destinationMob})`;
            break;

        case 'crew':
            backgroundDesktop = `url(${crewDes})`;
            backgroundTablet = `url(${crewTab})`;
            backgroundMobile = `url(${crewMob})`;
            break;

        case 'technology':
            backgroundDesktop = `url(${technologyDes})`;
            backgroundTablet = `url(${technologyTab})`;
            backgroundMobile = `url(${technologyMob})`;
            break

        default:
            console.log('Error .....');
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