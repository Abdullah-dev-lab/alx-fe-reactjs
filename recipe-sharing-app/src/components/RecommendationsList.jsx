import { useRecipeStore } from './recipeStore';

function Recommendations() {
  const recommendations = useRecipeStore((state) => state.recommendations());

  if (recommendations.length === 0) return <p>No Recommendations Yet</p>;

  return (
    <div>
      <h3>Recommended Recipes</h3>
      <ul>
        {recommendations.map((recipe) => (
          <li key={recipe.id}>{recipe.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Recommendations;
