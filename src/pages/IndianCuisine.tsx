import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import BackToHomeBtn from "../components/BackToHome-btn";
import {Link} from 'react-router-dom';
import {Recipe} from '../types';

export default function IndianCuisine () {
    const navigate = useNavigate();
    const [indianRecipes, setIndianRecipes] = useState<Recipe[]>([]);

    const fetchIndianRecipes = async () => {
        const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=14cbf30851114c3f9f6a2a906916cd22&cuisine=indian&number=10`;
        try {
          const response = await fetch(apiUrl);
    
          if (response.ok) {
            const data = await response.json();
            console.log(data);
            if (data.results && data.results.length > 0) {
              setIndianRecipes(data.results);
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
        fetchIndianRecipes();
      } , []);

    return (
        <div className="text-left p-4" style={{ fontFamily: "Dosis, sans-serif" }}>
        <h1 className="text-4xl font-bold mt-3">Indian Cuisine</h1>
        <h2 className="text-2xl font-semibold mt-2 mb-2">
        A Flavorful Tapestry of Tradition
        </h2>
        <BackToHomeBtn/>
        <div className="mt-6 p-4">
          <img
            src="/images/buffet.jpg"
            alt="Indian cuisine"
            width="300"
            height="auto"
            className="rounded-lg float-left mr-4"
          />
          <p className="text-lg">
          Indian cuisine is a captivating culinary tapestry woven with vibrant flavors, aromatic spices, and a deep-rooted connection to culture and tradition. 
          Indian cuisine is renowned for its skillful use of spices. From fiery chili peppers to fragrant cumin, coriander, and turmeric, each spice contributes to a complex flavor profile that ranges from mild to fiery hot.
          India's vast landscape and diverse culture give rise to a wide array of regional cuisines. Each region showcases its unique ingredients, cooking techniques, and signature dishes, making Indian cuisine a diverse and ever-evolving experience.
          India has a rich tradition of vegetarianism. Many classic Indian dishes, such as vegetable curries, dal (lentil stew), and paneer (Indian cheese), cater to vegetarians and vegans, making it a paradise for plant-based eaters.
          </p>
  
          <p className="text-lg">
          Indian street food is an explosion of flavors. From crispy samosas to spicy chaat and dosas, the streets are lined with vendors offering delectable treats that are affordable and irresistible.
          Indian cuisine is an explosion of flavors, a celebration of diversity, and a reflection of India's rich heritage. Whether you're savoring a hearty curry, a fragrant biryani, or a sweet mithai, every bite tells a story, inviting you to embark on a culinary journey that's as enchanting as it is delicious.
          </p>
  
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
            {indianRecipes.map((recipe) => (
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