import React from "react";
import { Recipe } from "../types";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-2 m-2 w-48 cursor-pointer">
      <img src={recipe.image} alt={recipe.title} className="w-48 h-auto rounded-md" />
      <h3 className="font-semibold mb-1 truncate hover:text-clip">{recipe.title}</h3>
    </div>
  );
};

export default RecipeCard;