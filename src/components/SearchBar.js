import { css } from "emotion";
import { useContext } from "react";
import { searchContext } from "../context/SearchContext";

const SearchBar = () => {
  const { setSearch } = useContext(searchContext);
  const { type, setType } = useContext(searchContext);
  console.log(type);
  const styleForm = css`
    padding-bottom: 25px;
    display: flex;
    justify-content: center;
  `;
  const styleLabel = css`
    display: flex;
    align-items: center;
    ion-icon {
      color: white;
      position: absolute;
      padding: 0px 13px;
      font-size: 25px;
    }
  `;
  const styleInput = css`
    background: #212121;
    border: none;
    height: 42px;
    width: 300px;
    border-radius: 10px;
    display: flex;
    outline: none;
    padding-left: 50px;
    padding-right: 15px;
    color: white;
    font-weight: 400;
    font-size: 1rem;
  `;
  return (
    <form className={styleForm}>
      <label className={styleLabel} htmlFor="">
        <ion-icon name="search-sharp"></ion-icon>
        <input
          className={styleInput}
          type="search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          name=""
          id=""
        />
      </label>
      <div>
        <input
          onChange={(e) => {
            setType(e.target.value);
          }}
          type="radio"
          name="type"
          id=""
          value="TvShow"
        />
        <input
          onChange={(e) => {
            setType(e.target.value);
          }}
          type="radio"
          name="type"
          id=""
          value="Movies"
        />
      </div>
    </form>
  );
};

export default SearchBar;
