import {useState} from 'react';
import { useNavigate } from "react-router-dom";




export default function SearchBar() {
const [searchQuery, setSearchQuery] = useState("");
const navigate = useNavigate();

const handleSearch = async () => {
  if(searchQuery.trim() === "") {
    return;
}

const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=14cbf30851114c3f9f6a2a906916cd22&query=${searchQuery}&number=5`;
try {
  const response = await fetch(
    apiUrl
  );

  if (response.ok) {
    const data = await response.json();
    console.log(data);
    if (data.results && data.results.length > 0) {
      const firstRecipe = data.results[0]; 
      const recipeId = firstRecipe.id;

      navigate(`/recipe/${recipeId}`);
    } else {
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
          className="w-full border-2 border-purple-300 rounded-full p-3 pl-5 transition-transform transform focus:scale-105 focus:shadow-lg focus:border-purple-500"
          onChange={((e) => setSearchQuery(e.target.value))}
        />
        <button className="bg-purple-800 text-white text-xl px-6 py-2 ml-3 shadow-lg rounded-full hover:bg-purple-900"
        onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}
