import { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard'; 
import Button from '../components/Button';
import { Recipe } from '../types';
import { cuisinesConfig } from '../cuisinesConfig';

export default function CuisinePage() {
    const { cuisineName } = useParams();
    const navigate = useNavigate();
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const currentCuisine = cuisinesConfig.find(c => c.name === cuisineName?.toLowerCase());

    const fetchRecipes = async () => {
        const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=14cbf30851114c3f9f6a2a906916cd22&cuisine=${cuisineName}&number=10`;
        try {
            const response = await fetch(apiUrl);

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                if (data.results && data.results.length > 0) {
                    setRecipes(data.results);
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
        fetchRecipes();
    }, [cuisineName]);

    if (!currentCuisine) {
        navigate('/404'); 
        return null;
    }

    return (
        <div className="text-left p-4" style={{ fontFamily: "Dosis, sans-serif" }}>
        <h1 className="text-4xl font-bold mt-3">{currentCuisine.displayName}</h1>
        <h2 className="text-2xl font-semibold mt-2 mb-4">{currentCuisine.tagline}</h2>
        <Button 
    label="Back to Home Page" 
    onClick={() => navigate('/')} 
/>
        <div className="mt-4 p-4">
            <img src={currentCuisine.image} alt={cuisineName} width="300" height="auto" className="rounded-lg float-left mr-4 mb-1" />
            <p className="text-lg text-justify">{currentCuisine.description1}</p>
            <p className="text-lg text-justify">{currentCuisine.description2}</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-8">
    {recipes.map((recipe) => (
        <div key={recipe.id} className="bg-white rounded-lg shadow-md p-4 w-full md:w-72 cursor-pointer">
            <Link to={`/recipe/${recipe.id}`}>
                <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-auto h-48 object-cover rounded-md mx-auto" 
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