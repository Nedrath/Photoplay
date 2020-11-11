import { css } from 'emotion'
import ImgShadow from './ImgShadow'

import ImageX from '../img/Icons-UserMenu/Divider 1.svg'

const Footer = () => {

  return <footer>
    <ImgShadow shadowTop shadowBottom>
      <img src={ImageX} alt=""/>
    </ImgShadow>
  </footer>;
};

export default Footer;

