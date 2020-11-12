import { css } from "emotion";
import ChevronBack from "./ChevronBack";

const Header = () => {
  const styleWrapper = css`
      padding: 46px 16px 0px 16px;

  `;

  return <header className={styleWrapper}>
    <ChevronBack />
    </header>;
};

export default Header;
