// src/components/AddRecipeForm.jsx
import { useState } from "react";

export default function AddRecipeForm() {
  // State for the form fields
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  // State for validation errors
  const [errors, setErrors] = useState({});

  const validateForm = () => {
  const newErrors = {};

  // Title validation
  if (!title.trim()) {
    newErrors.title = "Title is required.";
  } else if (title.length < 3) {
    newErrors.title = "Title must be at least 3 characters.";
  }

  // Ingredients validation
  if (!ingredients.trim()) {
    newErrors.ingredients = "Ingredients are required.";
  } else {
    const items = ingredients.split("\n").map((i) => i.trim()).filter(Boolean);
    if (items.length < 2) {
      newErrors.ingredients = "Please enter at least two ingredients (one per line).";
    }
  }

  // Instructions validation
  if (!instructions.trim()) {
    newErrors.instructions = "Instructions are required.";
  } else if (instructions.length < 10) {
    newErrors.instructions = "Instructions should be at least 10 characters long.";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0; // valid if no errors
};


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Stop submission if invalid
    } 

    // Build recipe object
    const newRecipe = {
      title,
      ingredients: ingredients.split("\n"), // split by line breaks
      instructions,
    };

    // For now, just log to console
    console.log("Submitted recipe:", newRecipe);

    // Reset form
    setTitle("");
    setIngredients("");
    setInstructions("");
    setErrors({});
  };



  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Recipe Title */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Recipe Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g Spaghetti Carbonara"
            required
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Ingredients (one per line)
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows={5}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. 200g spaghetti&#10;100g bacon"
            required
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm">{errors.ingredients}</p>
          )}
        </div>

        {/* Instructions */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Preparation steps
          </label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            rows={5}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. 1. Boil water.&#10;2. Cook pasta."
            required
          />
          {errors.instructions && (
            <p className="text-red-500 text-sm">{errors.instructions}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}
