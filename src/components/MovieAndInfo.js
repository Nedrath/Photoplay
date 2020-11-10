import { css } from "emotion";
import MovieImg from "../img/MovieImg.svg";

const MovieAndInfo = () => {
  const styleArticle = css`
    width: 261px;
    display: flex;
    padding-top: 13px;
    padding-bottom: 13px;
  `;
  const styleSection = css`
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-left: 10px;
    margin: auto;
  `;
  const styleH3 = css`
    font-size: 15px;
    font-weight: 400;
    color: white;
    padding-bottom: 8px;
  `;
  const styleText = css`
    color: white;
    opacity: 0.7;
    font-size: 13px;
  `;
  const styleDivider = css`
    color: white;
    opacity: 0.7;
    font-size: 15px;
    padding: 0px 2px;
  `;
  const styleMovieImg = css`
    width: 140px;
    height: 89px;
  `;
  const styleInfo = css`
    width: 100%;
    display: flex;
    width: 121px;
    justify-content: space-evenly;
    align-items: center;
  `;
  return (
    <article className={styleArticle}>
      <img className={styleMovieImg} src={MovieImg} alt="" />
      <section className={styleSection}>
        <h3 className={styleH3}>Narcos</h3>
        <div className={styleInfo}>
          <p className={styleText}>4 Episodes</p>
          <span className={styleDivider}>|</span>
          <p className={styleText}>5.02GB</p>
        </div>
      </section>
    </article>
  );
};

export default MovieAndInfo;
