import { css } from "emotion";

const SearchBar = () => {
  const styleForm = css``;
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
    font-weight: 500;
    font-size: 1rem;
  `;
  return (
    <form className={styleForm}>
      <label className={styleLabel} htmlFor="">
        <ion-icon name="search-sharp"></ion-icon>
        <input className={styleInput} type="search" name="" id="" />
      </label>
    </form>
  );
};

export default SearchBar;
