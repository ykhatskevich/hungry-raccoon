import { useState, useEffect } from "react";
import { Recipe } from "../types";
import RecipeCard from "./RecipeCard";
import { Link } from "react-router-dom";

interface PopularRecipesProps {
  popularRecipes: Recipe[];
}

export default function PopularRecipes({ popularRecipes }: PopularRecipesProps) {
  const [currentSet, setCurrentSet] = useState(1);

  const recipesPerPage = 4;

  const startIndex = (currentSet - 1) * recipesPerPage;
  const endIndex = startIndex + recipesPerPage;
  const recipesToDisplay = popularRecipes.slice(startIndex, endIndex);

  const handleLeftArrowClick = () => {
    const newIndex =
      currentSet > 1
        ? currentSet - 1
        : Math.ceil(popularRecipes.length / recipesPerPage);

    setCurrentSet(newIndex);
  };

  const handleRightArrowClick = () => {
    const newIndex =
      currentSet < Math.ceil(popularRecipes.length / recipesPerPage)
        ? currentSet + 1
        : 1;

    setCurrentSet(newIndex);
  };

  return (
    <div className="text-center">
      <h1
        style={{ fontFamily: "Dosis, sans-serif" }}
        className="text-2xl text-stone-900 font-semibold mb-3"
      >
        Our Popular Recipes
      </h1>
      <div className="flex items-center justify-center">
        <img
          onClick={handleLeftArrowClick}
          src="../images/arrow slider left.png"
          alt="arrow left"
          className="w-10 h-10 cursor-pointer transform hover:scale-125 transition-transform duration-300 ease-in-out"
        />
        <div className="flex flex-wrap justify-center gap-3 min-w-4xl">
          {recipesToDisplay.map((recipe: Recipe) => (
            <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
              <RecipeCard recipe={recipe} />
            </Link>
          ))}
        </div>
        <img
          onClick={handleRightArrowClick}
          src="../images/arrow slider right.png"
          alt="arrow right"
          className="w-10 h-10 cursor-pointer transform hover:scale-125 transition-transform duration-300 ease-in-out"
        />
      </div>
    </div>
  );
}
