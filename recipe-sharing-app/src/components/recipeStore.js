import { create } from 'zustand';

 export const useRecipeStore = create((set, get) => ({
   recipes: [],
   searchTerm: '',
   addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe],
   setRecipes: (recipes) => set({ recipes })
    })),

   initializeRecipes: (recipes) => 
    set(() => ({
         recipes: initialRecipes, 

    })),
     updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
    
     setSearchTerm: (term) => set({ searchTerm: term }),

  filteredRecipes: () => {
    const { recipes, searchTerm } = get();
    return recipes.filter((r) =>
      r.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },

  addToFavorites: (id) => set((state) => ({
    favorites: state.favorites.includes(id)
      ? state.favorites
      : [...state.favorites, id]
  })),

  removeFromFavorites: (id) => set((state) => ({
    favorites: state.favorites.filter((favId) => favId !== id)
  })),

  recommendations: () => {
    const { recipes, favorites } = get();

    const favoriteTitles = recipes
      .filter((r) => favorites.includes(r.id))
      .map((r) => r.title.charAt(0).toLowerCase());

    return recipes.filter(
      (r) =>
        !favorites.includes(r.id) &&
        favoriteTitles.includes(r.title.charAt(0).toLowerCase())
    );
  }
}));