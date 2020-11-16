import { css } from "emotion";
import { Fragment } from "react";

const Navigation = ({ text, icon }) => {
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
    <Fragment>
      <img className={styleIcon} src={icon} alt="" />
      <p className={styleText}>{text}</p>
    </Fragment>
  );
};

export default Navigation;
