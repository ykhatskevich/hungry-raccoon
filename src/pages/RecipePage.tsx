import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import Button from "../components/Button";

import { RecipeDetails } from "../types";
import { ExtendedIngredient } from "../types";

export default function RecipePage() {
  const { id } = useParams();
  const [recipeDetails, setRecipeDetails] = useState<RecipeDetails | null>(
    null
  );
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchRecipeDetails() {
      try {
        
        const apiUrl = await fetch(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=14cbf30851114c3f9f6a2a906916cd22`
        );
        const data = await apiUrl.json();
        console.log(data);
        setRecipeDetails(data); // Set the fetched recipe details in state
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    }

    fetchRecipeDetails();
  }, [id]); 


  if (recipeDetails === null) {
    return <div>Loading...</div>;
  }

  function removeHtmlTags(html: any) {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.innerText;
  }

  return (
    <div className="p-4">
      <img
        src={recipeDetails.image}
        alt={recipeDetails.title}
        className="rounded-lg shadow-md"
      />
      <h1
        className="text-3xl text-stone-900 font-semibold mt-3 mb-4"
        style={{ fontFamily: "Dosis, sans-serif" }}
      >
        {recipeDetails.title}
      </h1>
      <Button label="Back to Home Page" onClick={()=> navigate('/')}></Button>
      <h3 className="text-xl">
        Servings:{" "}
        <span className="font-semibold">{recipeDetails.servings}</span>
      </h3>
      <h3 className="text-xl mt-2">Wine Pairing: </h3>
<div className="p-3 max-w-screen-lg">
  <p>{recipeDetails.winePairing.pairingText}</p>
</div>

  
        
     
      <h3 className="text-xl">Ingredients:</h3>
      <table className="m-5">
        <tbody>
          {recipeDetails.extendedIngredients.map(
            (ingredient: ExtendedIngredient) => (
              <tr
                className="p-2 border-b border-gray-400"
                key={ingredient.id}
              >
                <td>{ingredient.original.toLowerCase()}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
      <h3 className="text-xl">Instructions:</h3>
      <div className="bg-fuchsia-100 m-5 p-3 max-w-lg shadow-lg rounded-lg">
        <p>{removeHtmlTags(recipeDetails.instructions)}</p>
      </div>
      <h3 className="text-xl">Summary:</h3>
      <div className="p-3 max-w-screen-lg">
        <p>{removeHtmlTags(recipeDetails.summary)}</p>
      </div>
    </div>
  );
}


