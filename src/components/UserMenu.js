import { css } from "emotion";
import { Link } from "@reach/router";
import iconMenu from "../img/Icons-UserMenu/user-2.svg";
import dividerImg from '../img/Icons-UserMenu/Divider 1.svg'

const UserMenu = ({ menuText }) => {
  const styleLink = css`
    display: flex;
    text-decoration: none;
    align-items: center;
  `;
  const styleText = css`
    color: white;
    font-size: 17px;
  `;
  const styleIcon = css`
    padding: 0px 20px;
  `;
  return (
    <div>
      <Link className={styleLink} to="">
        <img className={styleIcon} src={iconMenu} alt="" />
        <p className={styleText}>{menuText}</p>
      </Link>
      <img src={dividerImg} alt=""/>
    </div>
  );
};

export default UserMenu;
