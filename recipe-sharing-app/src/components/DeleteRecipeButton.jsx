
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';

function DeleteRecipeButton({ id }) {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(id);
      navigate('/');
    }
  };

  return <button onClick={handleDelete}>Delete</button>;
}

export default DeleteRecipeButton;
