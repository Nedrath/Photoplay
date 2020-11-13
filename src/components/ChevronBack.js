import { css } from "emotion";
import { Link } from "@reach/router";

const ChevronBack = () => {
  const styleLink = css`
    display: flex;
    align-items: center;
    text-decoration: none;
    width: 75px;

    ion-icon {
      color: white;
      font-size: 20px;
      z-index: 80;
    }
  `;
  const styleH3 = css`
    text-transform: uppercase;
    font-size: 14px;
    color: white;
    font-weight: 700;
    z-index: 80;
  `;

  return (
    <Link to="" className={styleLink}>
      <ion-icon name="chevron-back"></ion-icon>
      <h3 className={styleH3}>back</h3>
    </Link>
  );
};

export default ChevronBack;
