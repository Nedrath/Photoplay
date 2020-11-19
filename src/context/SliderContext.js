import { createContext, useState, useEffect } from "react";

export const SliderContext = createContext();

const SliderContextProvider = (props) => {
  const [topRated, setTopRated] = useState(null);

  const clientSecret = "4672e3dba68e7b4dc35cdd0a4ddb1e00";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${clientSecret}&language=en-US&page=1`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data.results));
  }, [topRated]);

  return (
    <SliderContext.Provider value={{ topRated, setTopRated }}>
      {props.children}
    </SliderContext.Provider>
  );
};

export default SliderContextProvider;

