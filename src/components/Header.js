import { css } from "emotion";
import ChevronBack from "./ChevronBack";

const Header = () => {
  const styleWrapper = css`
    height: 473px;
    margin: auto;
    overflow: hidden;
  `;

  return <header className={styleWrapper}>
    {<ChevronBack/>}
    </header>;
};

export default Header;
