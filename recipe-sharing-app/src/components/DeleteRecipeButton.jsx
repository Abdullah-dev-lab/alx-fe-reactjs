
import React from 'react';
import { useRecipeStore } from './recipeStore';

function DeleteRecipeButton({ id }) {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(id);
    }
  };

  return <button onClick={handleDelete}>Delete</button>;
}

export default DeleteRecipeButton;
