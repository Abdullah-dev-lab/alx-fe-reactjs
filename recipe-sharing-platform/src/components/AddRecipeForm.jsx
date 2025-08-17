import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({}); // validation errors

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!title.trim()) {
      formErrors.title = "Recipe title is required";
      isValid = false;
    }

    if (!ingredients.trim()) {
      formErrors.ingredients = "Ingredients are required";
      isValid = false;
    } else {
      const ingredientsArray = ingredients.split("\n").filter((item) => item.trim() !== "");
      if (ingredientsArray.length < 2) {
        formErrors.ingredients = "Please enter at least 2 ingredients";
        isValid = false;
      }
    }

    if (!steps.trim()) {
      formErrors.steps = "Preparation steps are required";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return; // stop if invalid

    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredients.split("\n").filter((item) => item.trim() !== ""),
      instructions: steps,
    };

    console.log("✅ New Recipe Submitted:", newRecipe);

    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
    alert("Recipe submitted successfully! 🎉");
  };

  return (
    <div className="flex justify-center px-4">
      <div className="w-full max-w-2xl mt-10 p-8 bg-white rounded-2xl shadow-lg sm:px-10 md:px-12 lg:px-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">➕ Add New Recipe</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Recipe Title */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Recipe Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`w-full p-3 border rounded-lg shadow-sm transition duration-200 focus:outline-none focus:ring-2 ${
                errors.title
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-blue-400"
              }`}
              placeholder="Enter recipe title"
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Ingredients</label>
            <textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className={`w-full p-3 border rounded-lg shadow-sm transition duration-200 focus:outline-none focus:ring-2 ${
                errors.ingredients
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-blue-400"
              }`}
              rows="4"
              placeholder="Enter each ingredient on a new line"
            ></textarea>
            {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
          </div>

          {/* Steps */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Preparation Steps</label>
            <textarea
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              className={`w-full p-3 border rounded-lg shadow-sm transition duration-200 focus:outline-none focus:ring-2 ${
                errors.steps
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-blue-400"
              }`}
              rows="5"
              placeholder="Enter step-by-step instructions"
            ></textarea>
            {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 hover:scale-[1.02] transition-all duration-300"
          >
            Submit Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;
