import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import DeleteRecipeForm from "./components/DeleteRecipeButton";
import EditRecipeForm from "./components/EditRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar";
import RecommendationsList from "./components/RecommendationsList";
import FavoritesList from "./components/FavoritesList";
import Layout from "./components/layout";
// import useRecipeStore from "./components/recipeStore";
import './index.css';
import './App.css';


function App() {
  return (
    <Router>
      <Routes path="/" element={<Layout />}>
        <Route index element={<RecipeList />} />
        <Route path="recipes/new" element={<AddRecipeForm />} />
        <Route path="recipes/:id" element={<RecipeDetails />} />
        <Route path="recipes/:id/edit" element={<EditRecipeForm />} />
        <Route path="recipes/:id/delete" element={<DeleteRecipeForm />} />
        <Route path="recommendations" element={<RecommendationsList />} />
        <Route path="favorites" element={<FavoritesList />} />
        <Route path="search" element={<SearchBar />} />
      </Routes>
    </Router>
  );
}

export default App;