import { css } from "emotion";
import { Link } from "@reach/router";

const Categories = () => {
  const styleSection = css`
    display: flex;
    justify-content: center;
    padding: 10px 0px;
  `;
  const styleLink = css`
    padding: 5px 15px;
    text-decoration: none;
    color: white;
    font-weight: 600;
    font-size: 12px;
  `;
  const styleSpan = css`
    color: white;
    font-size: 20px;
  `;
  return (
    <section className={styleSection}>
      <Link className={styleLink} to="">
        Movie
      </Link>
      <span className={styleSpan}>|</span>
      <Link className={styleLink} to="">
        Adventure
      </Link>
      <span className={styleSpan}>|</span>
      <Link className={styleLink} to="">
        Comedy
      </Link>
      <span className={styleSpan}>|</span>
      <Link className={styleLink} to="">
        Family
      </Link>
    </section>
  );
};

export default Categories;
