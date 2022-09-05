import React, { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const values = { isAuth, setIsAuth };

  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContext;
export { GlobalContextProvider };
