import {useState} from 'react';
import { useNavigate } from "react-router-dom";




export default function SearchBar() {
const [searchQuery, setSearchQuery] = useState("");
const navigate = useNavigate();

const handleSearch = async () => {
  if(searchQuery.trim() === "") {
    return;
}

const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=dd43f7faf0084a4580fb83983dabc493&query=${searchQuery}&number=5`;
try {
  const response = await fetch(
    apiUrl
  );

  if (response.ok) {
    const data = await response.json();
    console.log(data);

    // Check if 'recipes' array exists and has at least one element
    if (data.results && data.results.length > 0) {
      const firstRecipe = data.results[0]; 
      const recipeId = firstRecipe.id;

      navigate(`/recipe/${recipeId}`);
    } else {
      // Handle the case where no recipes were found
      console.error('No recipes found');
    }
  } else {
    console.error('Failed to fetch recipes');
  }
} catch (error) {
  console.error('Error during search:', error);
}
};





  return (
    <div className="relative">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search for recipes (e.g. Colcannon)"
          style={{ width: "500px" }}
          className="w-full  border-2 border-purple-300 rounded-md p-2"
          onChange={((e) => setSearchQuery(e.target.value))}
        />
        <button className="bg-cyan-800 px-4 py-2 rounded-lg text-xl text-purple-100 font-semibold  transform hover:scale-105 hover:bg-black transition-transform duration-300 ease-in-out"
        onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}
