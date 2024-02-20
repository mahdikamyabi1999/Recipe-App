import { createContext, useState } from "react";
export const GlobalContext = createContext(null);


export default function GlobalState({children}) {
  const [searchParam,SetSearchParams] = useState('');
  return <GlobalContext.Provider value={{searchParam,SetSearchParams}}>{children}</GlobalContext.Provider>
}