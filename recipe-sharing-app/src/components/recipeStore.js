import { create } from "zustand";
import { persist } from 'zustand/middleware';

const useRecipeStore = create(
  persist((set, get) => ({
  recipes: [
    { id: 1, title: "Jollof Rice", description: "Spicy West African rice dish." },
    { id: 2, title: "Egusi Soup", description: "Nigerian melon seed soup with spinach." },
  ],

  favorites: [],
  recommendations: [],
  searchTerm: "",

  //favorites management
  addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })),
  
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  generateRecommendations: () => set(state => {
    // Mock implementation based on favorites
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),

  
  // Actions
  setSearchTerm: (term) => set({ searchTerm: term }),

  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  setRecipes: (recipes) => set({ recipes }),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  updateRecipe: (id, updatedFields) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedFields } : recipe
      ),
    })),

  // ✅ Derived value (computed selector)
  getFilteredRecipes: () => {
    const { recipes, searchTerm } = get();
    if (!searchTerm) return recipes;
    return recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, 
}), { name: "recipe-storage" }
));

export default useRecipeStore;
