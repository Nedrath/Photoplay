import { css } from "emotion";
import Footer from "../components/Footer";
import MovieAndInfo from "../components/MovieAndInfo";

const Search = () => {
  const styleMain = css`
    background: black;
    padding: 44px 16px 44px 16px;
    margin-bottom: 50px;
  `;
  return (
    <div>
      <main className={styleMain}>
      <MovieAndInfo paddingBottom="10px" />
      <MovieAndInfo paddingBottom="10px" />
      <MovieAndInfo paddingBottom="10px" />
      <MovieAndInfo paddingBottom="10px" />
      <MovieAndInfo paddingBottom="10px" />
      <MovieAndInfo paddingBottom="10px" />
      <MovieAndInfo paddingBottom="10px" />
      <MovieAndInfo paddingBottom="10px" />
      <MovieAndInfo paddingBottom="10px" />
      </main>
      <Footer />
    </div>
  );
};

export default Search;
