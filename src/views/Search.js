import { css } from "emotion";
import { useContext, useEffect } from "react";
import { searchContext } from "../context/SearchContext";
import SearchBar from "../components/SearchBar";
import DividerCategorie from "../components/DividerCategorie";
import Footer from "../components/Footer";
import MovieImage from "../components/MovieImage";

const Search = ({ value }) => {
  const { searchResult } = useContext(searchContext);
  const { type, setType } = useContext(searchContext);

  useEffect(() => {
    onclick
  }, []);
  // console.log(searchResult);
  const styleMain = css`
    min-height: 100vh;
    background: black;
    padding: 44px 16px 44px 16px;
  `;
  const styleMovieGrid = css`
    padding-top: 16px;
    padding-bottom: 27px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(91px, 1fr));
    justify-content: space-evenly;
    gap: 16px;
  `;
  const styleList = css`
    margin: auto;
    width: 91px;
  `;
  return (
    searchResult && (
      <div>
        <main className={styleMain}>
          <SearchBar />
          <DividerCategorie text="tv shows" dividerWidth="81%" />
          <input
            onChange={(e) => {
              setType(e.target.value);
            }}
            type="radio"
            name="type"
            id=""
            value="tv/"
          />
          <div className={styleMovieGrid}>
            {searchResult.length > 0 ? (
              <MovieImage movieID={searchResult[0].id} />
            ) : (
              "no results found"
            )}
            {searchResult.map((result) => (
              <div className={styleList} key={result.id}>
                <MovieImage movieID={result.id} />
              </div>
            ))}
          </div>
          <DividerCategorie text="movies" dividerWidth="86%" />
          <input
            onChange={(e) => {
              setType(e.target.value);
            }}
            type="radio"
            name="type"
            id=""
            value="movie/"
          />
          <div className={styleMovieGrid}>
            {searchResult.length > 0 ? (
              <MovieImage movieID={searchResult[0].id} />
            ) : (
              "no results found"
            )}
            {searchResult.map((result) => (
              <div className={styleList} key={result.id}>
                <MovieImage movieID={result.id} />
              </div>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    )
  );
};

export default Search;
