import { useState } from "react";
import useRecipeStore from "../store/useRecipeStore";

function RecipeDetails() {
  const recipes = useRecipeStore((state) => state.recipes);
  const [id, setId] = useState("");
  const [recipe, setRecipe] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const found = recipes.find((r) => r.id === Number(id));
    setRecipe(found || null);
  };

  return (
    <div className="p-4 border rounded mb-4">
      <h2 className="font-bold mb-2">Recipe Details</h2>
      <form onSubmit={handleSearch} className="mb-2">
        <input
          type="number"
          placeholder="Enter Recipe ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="border px-2 py-1 mr-2"
        />
        <button type="submit" className="bg-purple-500 text-white px-4 py-1 rounded">
          Search
        </button>
      </form>

      {recipe ? (
        <div className="p-3 bg-gray-100 rounded">
          <p><strong>ID:</strong> {recipe.id}</p>
          <p><strong>Title:</strong> {recipe.title}</p>
        </div>
      ) : (
        <p className="text-gray-500">No recipe found</p>
      )}
    </div>
  );
}

export default RecipeDetails;
