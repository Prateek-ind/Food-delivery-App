import { createContext } from "react";
import { food_list } from "../../assets/frontend_assets/assets";
food_list;

export const StoreContext = createContext(null);

export const StoreContextProvider = ({ children }) => {
  const contextValue = { food_list };
  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};
