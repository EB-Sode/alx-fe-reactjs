import React from "react";
import useRecipeStore from "../store/useRecipeStore";

const FavoritesList = () => {
  // ✅ Subscribe only to primitives (arrays from store)
  const favoritesIds = useRecipeStore((state) => state.favorites);
  const recipes = useRecipeStore((state) => state.recipes);

  // ✅ Derive inside the component (not in the selector)
  const favorites = favoritesIds
    .map((id) => recipes.find((recipe) => recipe.id === id))
    .filter(Boolean);

  if (favorites.length === 0) {
    return <p>No favorites yet.</p>;
  }

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title || "Untitled Recipe"}</h3>
          <p>{recipe.description || "No description available."}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
