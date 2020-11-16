import { css } from "emotion";
import SearchBar from '../components/SearchBar'

const Search = () => {
const styleWrapper = css`
  height: 100vh;
  background: black;
  display: flex;
  justify-content: center;
  padding: 44px 16px 0px 16px;
`
  return (
    <main className={styleWrapper}>
      <SearchBar />
    </main>
  );
};

export default Search;
