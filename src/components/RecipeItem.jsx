import { Link } from "react-router-dom";

function RecipeItem({ item }) {
  return (
    <div className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 rounded-2xl border-white border-2">
      <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
        <img src={item?.image_url} alt="recipe item" className="block w-full" />
      </div>
      <div>
        <span className=" text-sm font-normal text-cyan-900">
          {item?.publisher}
        </span>
        <h3 className="font-bold text-xl truncate text-black">{item?.title}</h3>
        <Link
          to={`/recipe-item/${item?.id}`}
          className="text-sm p-3 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white mt-5"
        >
          Recipe Details
        </Link>
      </div>
    </div>
  );
}

export default RecipeItem;
