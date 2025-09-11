import { useState } from "react";
import useRecipeStore from "../store/useRecipeStore";

function DeleteRecipeForm() {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const [id, setId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id.trim()) return;

    deleteRecipe(Number(id));
    setId("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded mb-4">
      <h2 className="font-bold mb-2">Delete Recipe</h2>
      <input
        type="number"
        placeholder="Recipe ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="border px-2 py-1 mr-2"
      />
      <button type="submit" className="bg-red-500 text-white px-4 py-1 rounded">
        Delete
      </button>
    </form>
  );
}

export default DeleteRecipeForm;
