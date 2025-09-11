import { useState } from "react";
import useRecipeStore from "./recipeStore";

function EditRecipeForm() {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id.trim() || !title.trim()) return;

    updateRecipe(Number(id), { title });
    setId("");
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded mb-4">
      <h2 className="font-bold mb-2">Edit Recipe</h2>
      <input
        type="number"
        placeholder="Recipe ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="border px-2 py-1 mr-2"
      />
      <input
        type="text"
        placeholder="New title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border px-2 py-1 mr-2"
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-1 rounded">
        Update
      </button>
    </form>
  );
}

export default EditRecipeForm;
