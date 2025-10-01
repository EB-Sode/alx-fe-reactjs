import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import recipeData from "../data.json";

function RecipeDetailPage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const found = recipeData.find((r) => r.id === parseInt(id));
    setRecipe(found);
  }, [id]);

  if (!recipe) {
    return <h2 className="text-center text-red-500 mt-10">Recipe not found</h2>;
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Back Button */}
      <Link to="/" className="mt-6 text-blue-600 hover:underline mb-6 inline-block">
        ← Back to Recipes
      </Link>

      {/* Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Column: Image */}
        <div className="hover:scale-[1.02] transform transition duration-300 ease-in-out">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-80 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Right Column: Details */}
        <div>
          <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-gray-600 mb-6">{recipe.summary}</p>

          {/* Ingredients */}
          <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside space-y-1 mb-6 hover:text-blue-700">
            {recipe.ingredients?.map((ingredient, index) => (
              <li key={index} className="text-gray-700">
                {ingredient}
              </li>
            ))}
          </ul>

          {/* Instructions */}
          <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line hover:text-green-700">
            {recipe.instructions}
          </p>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetailPage;
