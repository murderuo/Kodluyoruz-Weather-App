import React, { createContext, useState } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const values = { isAuth, setIsAuth };

  return (
    <UserContext.Provider value={values}>{children}</UserContext.Provider>
  );
};

export default UserContext;
export { UserContextProvider };
