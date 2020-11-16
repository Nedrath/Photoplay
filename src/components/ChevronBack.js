import { css } from "emotion";
// import { Link } from "@reach/router";
// import { ESLint } from "eslint";

const ChevronBack = ({ iconColor, iconOpacity, chevronOpacity }) => {
  const styleLink = css`
    display: flex;
    align-items: center;
    text-decoration: none;
    width: 75px;

    ion-icon {
      color: ${iconColor};
      font-size: 20px;
      z-index: 80;
      opacity: ${chevronOpacity};
    }
  `;
  const styleH3 = css`
    text-transform: uppercase;
    font-size: 14px;
    color: white;
    font-weight: 700;
    z-index: 80;
    opacity: ${iconOpacity};
  `;

  function LastPage() {
    window.history.back();
  }

  return (
    //eslint-disable-next-line
    <div onClick={LastPage} className={styleLink}>
      <ion-icon name="chevron-back"></ion-icon>
      <h3 className={styleH3}>back</h3>
    </div>
  );
};

export default ChevronBack;
