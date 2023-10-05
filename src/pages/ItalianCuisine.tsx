import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import BackToHomeBtn from "../components/BackToHome-btn";
import {Link} from 'react-router-dom';
import {Recipe} from '../types';

export default function ItalianCuisine() {
  const navigate = useNavigate();
  const [italianRecipes, setItalianRecipes] = useState<Recipe[]>([]);

    
  
  const fetchItalianRecipes = async () => {
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=14cbf30851114c3f9f6a2a906916cd22&cuisine=italian&number=10`;
    try {
      const response = await fetch(apiUrl);

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        if (data.results && data.results.length > 0) {
          setItalianRecipes(data.results);
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
      <h1 className="text-4xl font-bold mt-3">Italian Cuisine</h1>
      <h2 className="text-2xl font-semibold mt-2 mb-2">
      A Symphony of Flavors from the Mediterranean      </h2>
      <BackToHomeBtn/>
      <div className="mt-6 p-4">
        <img
          src="/images/jorge.jpg"
          alt="Venice"
          width="300"
          height="auto"
          className="rounded-lg float-left mr-4"
        />
        <p className="text-lg">
          Italian cuisine is renowned worldwide for its rich flavors, simple yet
          sophisticated dishes, and a deep-rooted passion for food. It's a
          culinary journey that takes you to the heart of Italy, where every
          meal is a celebration of life. At the core of Italian cooking lies the
          use of fresh, high-quality ingredients. From ripe tomatoes and
          fragrant basil to extra-virgin olive oil and artisanal cheeses,
          Italian dishes showcase the natural flavors of each component. Italy
          is synonymous with pasta. From silky strands of spaghetti to
          comforting bowls of risotto, pasta dishes come in countless varieties.
          Whether tossed in a hearty ragù or a light olive oil and garlic sauce,
          pasta is a staple of Italian cuisine. Italian pizza is a worldwide
          favorite. With its thin, crispy crust and a variety of toppings, from
          the classic Margherita to inventive creations, it's a true culinary
          masterpiece. Italy's cuisine is as diverse as its landscapes. Each
          region boasts its own unique dishes and specialties. Northern Italy is
          known for creamy risottos and rich sauces, while the south is famous
          for its spicy and flavorful cuisine. The Italian way of life, "la
          dolce vita," is reflected in their desserts. Tiramisu, cannoli, and
          gelato are just a few of the sweet treats that capture the essence of
          indulgence. Italian cuisine wouldn't be complete without its
          world-class wines and espresso.
        </p>

        <p className="text-lg">
          Pair your meal with a fine Chianti or savor a shot of espresso to end
          a delightful dining experience. Italians value family, and mealtime is
          a cherished tradition where generations gather to share stories and
          recipes passed down through the years. Italian hospitality is
          legendary. Visitors are welcomed like family, and sharing a meal is an
          invitation into the heart of Italian culture.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
          {italianRecipes.map((recipe) => (
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
