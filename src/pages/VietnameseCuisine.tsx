import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import BackToHomeBtn from "../components/BackToHome-btn";
import {Link} from 'react-router-dom';
import {Recipe} from '../types';

export default function VietnameseCuisine () {
    const navigate = useNavigate();
    const [vietnameseRecipes, setVietnameseRecipes] = useState<Recipe[]>([]);

    const fetchVietnameseRecipes = async () => {
        const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=14cbf30851114c3f9f6a2a906916cd22&cuisine=vietnamese&number=10`;
        try {
          const response = await fetch(apiUrl);
    
          if (response.ok) {
            const data = await response.json();
            console.log(data);
            if (data.results && data.results.length > 0) {
              setVietnameseRecipes(data.results);
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
        fetchVietnameseRecipes();
      } , []);

    return (
        <div className="text-left p-4" style={{ fontFamily: "Dosis, sans-serif" }}>
        <h1 className="text-4xl font-bold mt-3">Vietnamese Cuisine</h1>
        <h2 className="text-2xl font-semibold mt-2 mb-2">
        Harmony in Flavor and Tradition
        </h2>
        <BackToHomeBtn/>
        <div className="mt-6 p-4">
          <img
            src="/images/banh.jpg"
            alt="Vietnamese"
            width="300"
            height="auto"
            className="rounded-lg float-left mr-4"
          />
          <p className="text-lg">
          Vietnamese cuisine is a culinary masterpiece that weaves together a tapestry of flavors, rooted in tradition and celebrated for its exquisite balance. With a rich history that spans generations, Vietnamese food has captivated taste buds worldwide with its distinctive qualities.

At the heart of Vietnamese cuisine is the artful harmony of flavors, encompassing the five fundamental tastes, where the delicate balance of sweet, sour, bitter, salty, and umami reigns supreme. Key ingredients like fish sauce, fresh herbs, and a medley of spices contribute to this harmonious flavor profile.
          </p>
  
          <p className="text-lg">
          Vietnamese culinary tradition is deeply intertwined with the seasons. Menus ebb and flow with nature's rhythm, showcasing the bounty of each season's locally sourced produce. This commitment to freshness ensures that every dish bursts with vibrant and peak-season flavors.

Among Vietnam's most iconic dishes, pho stands out as a shining example of culinary minimalism. This aromatic noodle soup, adorned with tender slices of beef or chicken, highlights the elegance of simplicity, allowing the pure essence of each ingredient to shine.
          </p>
  
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
            {vietnameseRecipes.map((recipe) => (
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