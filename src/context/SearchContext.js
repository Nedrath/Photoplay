import { createContext, useState, useEffect } from "react";

export const searchContext = createContext();

const Movies = `https://api.themoviedb.org/3/search/movie?api_key=4672e3dba68e7b4dc35cdd0a4ddb1e00&language=en-US&page=1&include_adult=false`

const TvShows = `https://api.themoviedb.org/3/search/tv?api_key=4672e3dba68e7b4dc35cdd0a4ddb1e00&language=en-US&page=1&include_adult=false`

const SearchContextProvider = (props) => {
  const [search, setSearch] = useState(null);
  const [type, setType] = useState(null);

  const clientSecret = "4672e3dba68e7b4dc35cdd0a4ddb1e00";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/keyword?api_key=${clientSecret}&query=${search}&page=1`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, [search]);

  return (
    <searchContext.Provider value={{search, setSearch, type, setType}}>{props.children}</searchContext.Provider>
  );
};

export default SearchContextProvider;

