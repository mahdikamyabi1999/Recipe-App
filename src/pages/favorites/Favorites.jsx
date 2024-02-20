import RecipeItem from "../../components/RecipeItem";
import { GlobalContext } from "../../context";
import { useContext } from "react";
function Favorites() {
  const {favoritesList } = useContext(GlobalContext);
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item) => <RecipeItem item={item}></RecipeItem>)
      ) : <div>
        <p className=" lg:text-3xl text-xl  text-center text-black font-semibold"> your favorites list is empty</p></div>}
    </div>
  )
}

export default Favorites