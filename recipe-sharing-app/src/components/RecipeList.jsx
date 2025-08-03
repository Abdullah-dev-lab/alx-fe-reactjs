import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';
import DeleteRecipeButton from './DeleteRecipeButton';
import SearchBar from './SearchBar';

function RecipeList() {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes());
 
  return (
   <div>
      <SearchBar />
      <ul>
          {filteredRecipes.map((recipe) => (
            <li key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
              {' | '}
              <Link to={`/recipe/${recipe.id}/edit`}>Edit</Link>
              {' | '}
              <DeleteRecipeButton id={recipe.id} />
            </li>
          ))
          }
        </ul>
   </div>
  );
}


  export default RecipeList;