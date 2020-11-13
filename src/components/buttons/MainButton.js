import { css } from "emotion";
import { Link } from "@reach/router";

const MainButton = ({ text }) => {
  const styleButton = css`
    padding: 10px 16px;
    background: linear-gradient(3deg, rgba(255,187,59,1) 0%, rgba(255,169,10,1) 100%);
    text-transform: uppercase;
    outline: none;
    width: 155px;
    text-decoration: none;
    color: black;
    font-weight: 700;
    display: flex;
    align-self: center;
    justify-content: center;
    border-radius: 10px;
    font-size: 16px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  `;
  return (
    <Link to="" className={styleButton}>
      {text}
    </Link>
  );
};

export default MainButton;
