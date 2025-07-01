import { useState, useContext, createContext } from "react";

const appContext = createContext();

export const AppContextProvider = ({ children }) => {
  //ALL GLOBAL FUNCTIONS WILL BE SET HERE;
  const [isStarted, setIsStarted] = useState(false);

  const value = {
    isStarted,
    setIsStarted,
  };
  return <appContext.Provider value={value}>{children}</appContext.Provider>;
};

export const useAppContext = () => {
  return useContext(appContext);
};
