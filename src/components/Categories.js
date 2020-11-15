import { css } from "emotion";
import { Link } from "@reach/router";

const Categories = ( { genreText } ) => {
  const styleSection = css`
    display: flex;
    justify-content: center;
    padding: 10px 0px;
  `;
  const styleLink = css`
    padding: 5px 15px;
    text-decoration: none;
    color: white;
    font-weight: 400;
    font-size: 12px;
  `;
  const styleSpan = css`
    color: white;
    font-size: 15px;
    align-self: center;
  `;
  return (
    <section className={styleSection}>
      <Link className={styleLink} to="">
        {genreText}
      </Link>
      <span className={styleSpan}>|</span>
      <Link className={styleLink} to="">
        {genreText}
      </Link>
      <span className={styleSpan}>|</span>
      <Link className={styleLink} to="">
        {genreText}
      </Link>
      <span className={styleSpan}>|</span>
      <Link className={styleLink} to="">
        {genreText}
      </Link>
    </section>
  );
};

export default Categories;
