import { Link } from "react-router-dom";
import useRecipeStore from "../store/recipeStore";  // ✅ fix path

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  if (recipes.length === 0) {
    return <p>No recipes available. Add one!</p>;
  }

  return (
    <div>
      <h2>All Recipes</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id} className="border p-4 my-2 rounded">
          {/* ✅ Each recipe links to its details page */}
          <h3>
            <Link to={`/recipes/${recipe.id}`} className="text-blue-500 underline">
              {recipe.title}
            </Link>
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
