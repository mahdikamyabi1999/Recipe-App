import { createContext, useState } from "react";
import {useNavigate} from 'react-router-dom'
export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, SetSearchParams] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipedetailsData,setrecipedetailsData] = useState(null);
  const [favoritesList,setFavoritesList] = useState([]);

  const navigate = useNavigate();
  function handleAddToFavorites(getCurrentItem){
    let copyFavoritesList = [...favoritesList];
    const index = copyFavoritesList.findIndex(item => item.id === getCurrentItem.id);
    if(index === -1) {
      copyFavoritesList.push(getCurrentItem)
    } else {
      copyFavoritesList.splice(index)
    }
    setFavoritesList(copyFavoritesList)
  }
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
        navigate('/')
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      SetSearchParams("");
    }
  }
  return (
    <GlobalContext.Provider
      value={{ searchParam, SetSearchParams, handleSubmit,loading,recipeList,recipedetailsData,setrecipedetailsData,favoritesList,setFavoritesList,handleAddToFavorites }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
