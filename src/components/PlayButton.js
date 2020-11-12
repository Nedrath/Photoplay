import { css } from "emotion";
import { Link } from "@reach/router";
import PlayBtn from "../img/play-button-2.svg";

const PlayButton = () => {
  const styleLink = css`
    position: absolute;
    display: flex;
    top: 44%;
    left: 44%;
  `;
  const styleIcon = css`
    z-index: 50;
  `;

  return (
    <Link to="" className={styleLink}>
      <img className={styleIcon} src={PlayBtn} alt="" />
    </Link>
  );
};

export default PlayButton;
