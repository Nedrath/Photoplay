import { createContext, useState, useEffect } from "react";

export const SliderContext = createContext();

const SliderContextProvider = ({ children }) => {
  const [topRated, setTopRated] = useState(null);
  //const [elements, setElements] = useState(null);

  const clientSecret = "4672e3dba68e7b4dc35cdd0a4ddb1e00";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${clientSecret}&language=en-US&page=1`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => setTopRated(data.results));
  }, []);

  return (
    <SliderContext.Provider value={{ topRated, setTopRated }}>
      {children}
    </SliderContext.Provider>
  );
};

export default SliderContextProvider;
