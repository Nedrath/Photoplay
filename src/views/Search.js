import { css } from "emotion";
import SearchBar from '../components/SearchBar'
import DividerCategorie from '../components/DividerCategorie'

import movieImg from '../img/Cast-Movies/deadpool.svg'

const Search = () => {
const styleWrapper = css`
  height: 100vh;
  background: black;
  justify-content: center;
  padding: 44px 16px 44px 16px;
`
const styleResultsBox = css`
  padding-top: 16px;
  padding-bottom: 27px;
`
  return (
    <main className={styleWrapper}>
      <SearchBar />
      <DividerCategorie text="tv shows"
        dividerWidth="81%"
      />
      <div className={styleResultsBox}>
        <img src={movieImg} alt=""/>
      </div>
      <DividerCategorie text="movies"
        dividerWidth="86%"
      />
      <div className={styleResultsBox}>
        <img src={movieImg} alt=""/>
      </div>
    </main>
  );
};

export default Search;
