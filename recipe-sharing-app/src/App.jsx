import { useState } from 'react'
import './App.css'
import { useRecipeStore } from './recipeStore';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditRecipeForm from './components/EditRecipeForm';
import RecipeDetails from './components/RecipeDetails';

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RecipeList recipes={recipes} />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/recipe/:id/edit" element={<EditRecipeForm />} />
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
