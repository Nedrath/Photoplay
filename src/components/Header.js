import { css } from "emotion";

const Header = () => {
  const styleWrapper = css`
    height: 540px;
    margin: auto;
    overflow: hidden;
  `;
  return <header className={styleWrapper}></header>;
};

export default Header;
