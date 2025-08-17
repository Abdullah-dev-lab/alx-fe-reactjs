import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import recipesData from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipesData.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-lg text-gray-600 mt-10">Loading recipe...</p>;
  }

  return (
    <div className="container mx-auto p-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        {recipe.title}
      </h1>

      {/* Image */}
      <div className="flex justify-center mb-8">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full md:w-2/3 lg:w-1/2 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Summary */}
      <p className="text-center text-gray-700 text-lg mb-8 max-w-3xl mx-auto">
        {recipe.summary}
      </p>

      {/* Ingredients & Instructions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Ingredients Card */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Ingredients</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        {/* Instructions Card */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Instructions</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {recipe.instructions}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
