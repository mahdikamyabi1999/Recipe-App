import { createContext, useState } from "react";
export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, SetSearchParams] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}&key=fa1de4e3-0c5f-4dff-a8c1-87b11dc33cbb`
      );
      const data = await res.json();
      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoading(false);
        SetSearchParams("");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      SetSearchParams("");
    }
  }
  return (
    <GlobalContext.Provider
      value={{ searchParam, SetSearchParams, handleSubmit }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
