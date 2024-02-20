import { useParams } from "react-router-dom"
import { GlobalContext } from "../../context";
import { useContext, useEffect } from "react";
function Details() {
  const {recipedetailsData,setrecipedetailsData,handleAddToFavorites,favoritesList } = useContext(GlobalContext);
  const {id} = useParams();
  useEffect(() => {
    async function getRecipeDetails() {
      const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
      const data = await res.json();
      if(data?.data) {
        setrecipedetailsData(data?.data);
      }
    }
    getRecipeDetails()
  },[])
  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className=" row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-3xl group">
          <img src={recipedetailsData?.recipe?.image_url} alt="item" className=" w-full h-full object-cover block group-hover:scale-105 duration-300" />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className=" text-sm font-medium text-cyan-900">{recipedetailsData?.recipe?.publisher}</span>
        <h3 className="font-bold text-3xl truncate text-black">{recipedetailsData?.recipe?.title}</h3>
        <div>
          <button onClick={() => handleAddToFavorites(recipedetailsData?.recipe)} className="p-3 px-8 rounded-lg text-base font-medium tracking-wide mt-3 inline-block shadow-md bg-black text-white">{favoritesList.findIndex(i => i.id === recipedetailsData?.recipe?.id) !== -1 ? 'Remove from Favorites' : 'Add To Favorites'}</button>
        </div>
        <div>
          <span className="text-2xl font-semibold text-black">Ingredients:</span>
          <ul className="flex flex-col gap-3">
            {recipedetailsData?.recipe?.ingredients.map(i => <li>
              <span className="text-xl font-semibold text-black">{i.quantity} {i.unit}</span>
              <span className="text-xl font-semibold text-black">{i.description}</span>
            </li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Details