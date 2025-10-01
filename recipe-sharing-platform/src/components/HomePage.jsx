import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import recipeData from '../data.json';

export default function HomePage() {
  // State to store the recipes fetched from data.json
  const [recipes, setRecipes] = useState([]);

  // useEffect runs once after the component mounts ([])

    useEffect(() => {
    // Load mock data directly instead of fetching
    setRecipes(recipeData);
  }, []);

  return (
    // Page wrapper: sets min height, background color, and padding
    <main className="min-h-screen bg-gray-50 p-6">
      {/* Page title */}
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Recipes</h1>

      {/* 
        Responsive Grid:
        - grid: activates CSS grid layout
        - grid-cols-1: 1 column on mobile
        - sm:grid-cols-2: 2 columns on small screens (>= 640px)
        - lg:grid-cols-3: 3 columns on large screens (>= 1024px)
        - gap-6: spacing between grid items
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Loop over recipes and display each as a card */}
        {recipes.map((recipe) => (
          <Link
            key={recipe.id} // unique key for each list item
            to={`/recipe/${recipe.id}`} // link to recipe detail page
            className="bg-white rounded-lg shadow-md overflow-hidden
                      transform transition duration-300 ease-in-out
                      hover:scale-[1.02] hover:shadow-xl"
            /*
              Card styles:
              - bg-white: white background
              - rounded-lg: rounded corners
              - shadow-md: base shadow
              - overflow-hidden: clip overflowing child content
              - transform: enable transforms
              - transition duration-300 ease-in-out: smooth animation
              - hover:scale-[1.02]: scale up slightly on hover
              - hover:shadow-xl: bigger shadow on hover
            */
          >
            {/* Card image */}
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover"
              /*
                - w-full: span full width
                - h-40: fixed height
                - object-cover: crop & fill image while keeping aspect ratio
              */
            />

            {/* Card content */}
            <div className="p-4">
              {/* Recipe title */}
              <h2 className="text-xl font-semibold text-gray-900">
                {recipe.title}
              </h2>

              {/* Recipe summary */}
              <p className="mt-2 text-sm text-gray-600">{recipe.summary}</p>
            </div>
          </Link>
        ))}
      </div>
      <Link
        to="/addrecipe"
        className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-300 transition"
      >
        + Add New Recipe
      </Link>
    </main>
  );
}
