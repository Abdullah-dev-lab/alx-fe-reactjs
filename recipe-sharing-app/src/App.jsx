import { useState } from 'react'
import './App.css'
import { useRecipeStore } from './components/recipeStore';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  const recipes = useRecipeStore((state) => state.recipes);
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const initializeRecipes = useRecipeStore((state) => state.initializeRecipes);
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>My Recipe App</h1>
      <AddRecipeForm onAddRecipe={addRecipe} />
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
