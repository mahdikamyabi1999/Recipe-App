import RecipeItem from "../../components/RecipeItem";
import { GlobalContext } from "../../context";
import { useContext } from "react";

function Home() {
  const { loading, recipeList } = useContext(GlobalContext);
  if (loading) return <div>Loading... please wait</div>;
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem item={item}></RecipeItem>)
      ) : (
        <div>
          <p className=" lg:text-3xl text-xl  text-center text-black font-semibold">
            Nothing to show <br />
            please search something
          </p>
        </div>
      )}
    </div>
  );
}
export default Home;
