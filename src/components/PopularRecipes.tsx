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
    const totalSets = Math.ceil(popularRecipes.length / recipesPerPage);

    const cardWidth = 250; 
    const spacing = 12; 
    const totalCardWidth = cardWidth + spacing;
    const visibleWidth = totalCardWidth * recipesPerPage - spacing; // Subtract one spacing as it's not needed for the last card in view

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSet(prevSet => (prevSet < totalSets ? prevSet + 1 : 1));
        }, 5000);
        return () => {
            clearInterval(interval);
        };
    }, [totalSets]);

    const transformValue = -(currentSet - 1) * 100;

    return (
        <div className="text-center">
            <h1
                style={{ fontFamily: "Dosis, sans-serif" }}
                className="text-2xl text-stone-900 font-semibold mb-3"
            >
                Our Popular Recipes
            </h1>
            <div className="flex justify-center items-center w-full">
                <div className="carousel-container relative overflow-hidden" style={{ width: `${visibleWidth}px` }}>
                    <div 
                        className="carousel-content flex" 
                        style={{ transform: `translateX(${transformValue}%)` }}
                    >
                        {popularRecipes.map((recipe: Recipe) => (
                            <div className="recipe-card-container" key={recipe.id} style={{ width: `${cardWidth}px` }}>
                                <Link to={`/recipe/${recipe.id}`}>
                                    <RecipeCard recipe={recipe} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}