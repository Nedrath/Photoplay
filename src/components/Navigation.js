import { Link } from "@reach/router";
import { css } from "emotion";

const Navigation = ({ text, icon }) => {
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
  const styleText = css`
    text-transform: uppercase;
    color: white;
    font-size: 8px;
    font-weight: 600;
  `;
  const styleIcon = css`
    padding-bottom: 7px;
  `;
  return (
    <Link to="" className={styleLink}>
      <img className={styleIcon} src={icon} alt="" />
      <p className={styleText}>{text}</p>
    </Link>
  );
};

export default Navigation;
