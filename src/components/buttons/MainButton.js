import React from "react";
import { css } from "emotion";
import { Link } from "@reach/router";

const MainButton = ({ text }) => {
  const styleButton = css`
    padding: 10px 33px;
    background: #ffbb3b;
    text-transform: uppercase;
    outline: none;
    text-decoration: none;
    color: black;
    font-weight: 700;
    display: inline-block;
    align-items: center;
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
