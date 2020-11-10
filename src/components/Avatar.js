import { css } from "emotion";
import AvatarImg from "../img/AvatarImg.svg";

const Avatar = () => {
  const styleArticle = css`
    width: 235px;
    height: 235px;
    padding-top: 41px;
    display: flex;
    flex-direction: column;
    margin: auto;
  `;
  const styleAvatar = css`
    border-radius: 50%;
    width: 134px;
    height: 134px;
    border: 3.5px solid #ffbb3b;
    display: flex;
    align-self: center;
  `;
  const styleSection = css`
    text-align: center;
    padding-top: 28px;
  `;
  const styleH3 = css`
    font-size: 27px;
    color: white;
    font-weight: 400;
  `;
  const styleText = css`
    font-size: 17px;
    font-weight: 400;
    color: #ffbb3b;
    letter-spacing: 1px;
  `;
  return (
    <article className={styleArticle}>
      <img className={styleAvatar} src={AvatarImg} alt="" />
      <section className={styleSection}>
        <h3 className={styleH3}>Tasun Prasad</h3>
        <p className={styleText}>Premium</p>
      </section>
    </article>
  );
};

export default Avatar;
