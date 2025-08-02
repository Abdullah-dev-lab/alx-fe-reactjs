import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';
import DeleteRecipeButton from './DeleteRecipeButton';

function RecipeList() {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          {' | '}
          <Link to={`/recipe/${recipe.id}/edit`}>Edit</Link>
          {' | '}
          <DeleteRecipeButton id={recipe.id} />
        </li>
      ))}
    </ul>
  );
}


  export default RecipeList;