import React, { createContext, useState, useEffect } from "react";

const userContext = createContext();

const UserContextProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:1234/data/learninghours.json")
      .then((response) => response.json())
      .then((result) => setUser(result.user));
  }, []);

  return (
    <userContext.Provider value={user}>{props.children}</userContext.Provider>
  );
};

export default UserContextProvider;
