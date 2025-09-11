import AddRecipeForm from "./components/AddRecipeForm";
import DeleteRecipeForm from "./components/DeleteRecipeButton";
import EditRecipeForm from "./components/EditRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar";
import RecommendationList from "./components/RecommendationList";
import FavoriteList from "./components/FavoriteList";
import useRecipeStore from "./store/useRecipeStore";
import './index.css';
import './App.css';

function App() {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div className="p-6">
      <SearchBar />
      
      <h2 className="font-bold mt-6 mb-2">All Recipes</h2>
      <RecipeList />
      <RecommendationList />
      <FavoriteList />

      <h1 className="text-2xl font-bold mb-4">Recipe Management</h1>
      <AddRecipeForm />
      <EditRecipeForm />
      <DeleteRecipeForm />
      <RecipeDetails />
      
    </div>
  );
}

export default App;


// ALTERNATIVE RENDERING OF RECIPES LIST
      // <ul>
      //   {recipes.map((recipe) => (
      //     <li key={recipe.id}>
      //       {recipe.id} - {recipe.title}
      //     </li>
      //   ))}
      // </ul>