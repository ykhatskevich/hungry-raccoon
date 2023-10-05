import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import BackToHomeBtn from "../components/BackToHome-btn";
import {Link} from 'react-router-dom';
import {Recipe} from '../types';

export default function JapaneseCuisine () {
    const navigate = useNavigate();
    const [japaneseRecipes, setJapaneseRecipes] = useState<Recipe[]>([]);

    const fetchJapaneseRecipes = async () => {
        const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=14cbf30851114c3f9f6a2a906916cd22&cuisine=japanese&number=10`;
        try {
          const response = await fetch(apiUrl);
    
          if (response.ok) {
            const data = await response.json();
            console.log(data);
            if (data.results && data.results.length > 0) {
              setJapaneseRecipes(data.results);
            } else {
              console.error("No recipes found");
            }
          } else {
            console.error("No recipes found");
          }
        } catch (error) {
          console.error("Error during search:", error);
        }
      };

      useEffect(() => {
        fetchJapaneseRecipes();
      } , []);

    return (
        <div className="text-left p-4" style={{ fontFamily: "Dosis, sans-serif" }}>
        <h1 className="text-4xl font-bold mt-3">Japanese Cuisine</h1>
        <h2 className="text-2xl font-semibold mt-2 mb-2">
        Harmony in Flavor and Tradition
        </h2>
        <BackToHomeBtn/>
        <div className="mt-6 p-4">
          <img
            src="/images/salmon.jpg"
            alt="Venice"
            width="300"
            height="auto"
            className="rounded-lg float-left mr-4"
          />
          <p className="text-lg">
          Japanese cuisine is a culinary art form that embodies the principles of balance, simplicity, and an unwavering respect for tradition. With a history dating back centuries, Japanese food has become internationally renowned for its unique characteristics.
          Japanese cuisine is celebrated for its ability to masterfully balance the five basic tastes, with a special emphasis on umami, the savory and deeply satisfying flavor. Ingredients like miso, soy sauce, and seaweed contribute to this rich taste profile.
          The Japanese have a profound appreciation for seasonal ingredients. Menus change with the seasons to showcase the freshest, locally sourced produce, ensuring that each dish is at its peak flavor.
          </p>
  
          <p className="text-lg">
          Japan's most iconic dishes, sushi and sashimi, highlight the art of minimalism. Delicate slices of raw fish or seafood, served atop vinegared rice or alone, emphasize the importance of pure, unadulterated flavors.
          The mastery of cooking techniques like tempura (deep-frying) and teriyaki (grilling with a glaze) adds depth and variety to Japanese cuisine. These methods are known for their ability to enhance the natural essence of ingredients.
          </p>
  
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
            {japaneseRecipes.map((recipe) => (
             <div key={recipe.id} className="bg-white rounded-lg shadow-md p-4 w-full md:w-72 cursor-pointer">
              <Link to={`/recipe/${recipe.id}`}>
              <img
               src={recipe.image}
               alt={recipe.title}
               className="w-auto h-48 object-cover rounded-md mx-auto" // Adjust the height here
             />
             <h3 className="font-semibold mt-4 mb-2 truncate hover:text-clip">
               {recipe.title}
             </h3>
              </Link>
             
           </div>
            ))}
          </div>
        </div>
  
  
      </div>
    )
}