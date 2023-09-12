import { useContext, useState } from "react";
import React from "react";

const currentPageContext = React.createContext();
const switchToUsersContext = React.createContext();
const switchToClothesContext = React.createContext();
const switchToShoesContext = React.createContext();

export const useCurrentPage = () => {
  return useContext(currentPageContext);
};
export const useSwitchToUsers = () => {
  return useContext(switchToUsersContext);
};
export const useSwitchToClothes = () => {
  return useContext(switchToClothesContext);
};
export const useSwitchToShoes = () => {
  return useContext(switchToShoesContext);
};

function ProviderContext({children}) {
  const getPage = localStorage.getItem('switchPage');
  const [currentPage, setCurrentPage] = useState(getPage);
  localStorage.setItem('switchPage', currentPage);
  
  const switchToUsers = () => {
    setCurrentPage("users");
  };
  const switchToClothes = () => {
    setCurrentPage("clothes");
  };
  const switchToShoes = () => {
    setCurrentPage("shoes");
  };
  return (
    <>
      <currentPageContext.Provider value={currentPage}>
        <switchToUsersContext.Provider value={switchToUsers}>
          <switchToClothesContext.Provider value={switchToClothes}>
            <switchToShoesContext.Provider value={switchToShoes}>
              {children}
            </switchToShoesContext.Provider>
          </switchToClothesContext.Provider>
        </switchToUsersContext.Provider>
      </currentPageContext.Provider>
    </>
  );
}

export { ProviderContext };
