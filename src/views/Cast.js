import { css } from "emotion";
import Footer from "../components/Footer";
import MovieText from "../components/MovieText";
import Slider from "../components/Slider";
import ActorInfoImg from "../components/ActorInfoImg";
import Headline from "../components/Headline";

import movieDeadPool from "../img/Cast-Movies/deadpool.svg";
import actorImg from '../img/Cast-Movies/Isabela Moner copy.svg'

const MovieDetails = () => {
  const styleWrapper = css`
    height: 100vh;
    background: black;
  `;
  const styleHeader = css`
    padding: 44px 16px 0px 16px;
  `;
  const styleCastBox = css`
    position: relative;
    height: 250px;
  `;
  const styleRatingAndText = css`
    min-height: 250px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
  `;

  return (
    <div className={styleWrapper}>
      <header className={styleHeader}></header>
      <main>
        <section className={styleCastBox}>
          <ActorInfoImg
            heroImg={actorImg}
            topHeroImg="-50px"
            heroHeight="300px"
            titleMovie="Dora and the lost city of gold"
          />
        </section>
        <section className={styleRatingAndText}>
          <MovieText text="Michael Peña was born and raised in Chicago, to Nicolasa, a social worker, and Eleuterio Peña, who worked at a button factory. His parents were originally from Mexico." />
        </section>
        <Headline text="Known For" />
        <Slider name="Deadpool" movieImg={movieDeadPool} />
      </main>
      <Footer />
    </div>
  );
};

export default MovieDetails;
