import { css } from "emotion";
import Navigation from './Navigation'
import iconHome from '../img/Icons-Navigation/Home icon.svg'
import iconSearch from '../img/Icons-Navigation/search-2.svg'
import iconDownloads from '../img/Icons-Navigation/download.svg'
import iconProfile from '../img/Icons-Navigation/man-user.svg'

const Footer = () => {
    const styleNav = css`
    height: 79px;
    width: 100%;
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    padding-top: 15px;
    padding-bottom: 28px;
    padding-left: 40px;
    padding-right: 40px;
    background: #1A1A1A;
    display: flex;
    justify-content: space-between;
  `;
  return (
    <nav className={styleNav}>
     <Navigation 
     icon={iconHome}
     text="home"
     />
     <Navigation 
     icon={iconSearch}
     text="search"
     />
     <Navigation 
     icon={iconDownloads}
     text="downloads"
     />
     <Navigation 
     icon={iconProfile}
     text="profile"
     />
    </nav>
  );
};

export default Footer;
