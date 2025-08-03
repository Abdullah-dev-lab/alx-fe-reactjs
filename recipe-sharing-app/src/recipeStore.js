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
}));