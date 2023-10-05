import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import BackToHomeBtn from "../components/BackToHome-btn";
import {Link} from 'react-router-dom';
import {Recipe} from '../types';


export default function AmericanCuisine () {
    const navigate = useNavigate();
    const [americanRecipes, setAmericanRecipes] = useState<Recipe[]>([]);
  
      
    
    const fetchItalianRecipes = async () => {
      const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=14cbf30851114c3f9f6a2a906916cd22&cuisine=american&number=10`;
      try {
        const response = await fetch(apiUrl);
  
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          if (data.results && data.results.length > 0) {
            setAmericanRecipes(data.results);
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
      fetchItalianRecipes();
    } , []);
  
  
  
  
    return (
      <div className="text-left p-4" style={{ fontFamily: "Dosis, sans-serif" }}>
        <h1 className="text-4xl font-bold mt-3">American Cuisine</h1>
        <h2 className="text-2xl font-semibold mt-2 mb-2">
        A Melting Pot of Flavors and Cultures
        </h2>
        <BackToHomeBtn/>
        <div className="mt-6 p-4">
          <img
            src="/images/snack.jpg"
            alt="Venice"
            width="300"
            height="auto"
            className="rounded-lg float-left mr-4"
          />
          <p className="text-lg">
          American cuisine is a reflection of the country's rich history and diverse cultural heritage. Often referred to as a "melting pot" of flavors, American food is as varied as the people who call the United States home. This culinary tapestry is characterized by several key features:
          </p>
  
          <p className="text-lg">
          American cuisine is incredibly diverse, owing to the vast range of ethnic backgrounds and traditions that have influenced it. From Native American, European, African, and Asian culinary traditions to more recent global influences, American food encompasses an array of tastes and ingredients.
          The United States is a large country with distinct regional cuisines. From the hearty barbecue of the South to the seafood-rich dishes of New England and the Tex-Mex flavors of the Southwest, each region offers its own unique dishes and cooking styles.
          American cuisine is known for its ability to fuse different culinary traditions into innovative creations. Fusion cuisine has given rise to dishes like sushi burritos, Korean barbecue tacos, and gourmet burgers with unexpected toppings.
          American comfort food is cherished for its warmth and familiarity. Classics like macaroni and cheese, fried chicken, pot roast, and apple pie evoke a sense of nostalgia and homey comfort.
          </p>
  
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
            {americanRecipes.map((recipe) => (
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
    );
}