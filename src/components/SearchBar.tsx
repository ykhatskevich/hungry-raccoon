import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

type SearchBarProps = {
  setErrorMessage: React.Dispatch<React.SetStateAction<string | null>>;
}


const SearchBar: React.FC<SearchBarProps> = ({ setErrorMessage }) => {
const [searchQuery, setSearchQuery] = useState("");
const navigate = useNavigate();

const handleSearch = async () => {
  if(searchQuery.trim() === "") {
    setErrorMessage("Please enter a name of the recipe");
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

      setErrorMessage(null);

      navigate(`/recipe/${recipeId}`);
    } else {
      setErrorMessage("Oops... no recipes found. Please try with a different recipe");

    }
  } else {
    setErrorMessage("Oops... something went wrong. Please try again.");
  }
} catch (error) {
  console.error('Error during search:', error);
  setErrorMessage("Oops... something went wrong. Please try again.");
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
        <Button label="Search" onClick={handleSearch}></Button>
      </div>
    </div>
  );
}


export default SearchBar;