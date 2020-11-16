import { css } from "emotion";
import { Link } from "@reach/router";
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
   const styleLink = css`
   text-decoration: none;
   color: white;
   opacity: 0.7;
   height: 38px;
   width: 26px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
 `;
  return (
    <nav className={styleNav}>
      <Link to="" className={styleLink}>
     <Navigation 
     icon={iconHome}
     text="home"
     />
     </Link>
     <Link to="/search" className={styleLink}>
     <Navigation 
     icon={iconSearch}
     text="search"
     />
     </Link>
     <Link to="" className={styleLink}>
     <Navigation 
     icon={iconDownloads}
     text="downloads"
     />
     </Link>
     <Link to="" className={styleLink}>
     <Navigation 
     icon={iconProfile}
     text="profile"
     />
     </Link>
    </nav>
  );
};

export default Footer;
