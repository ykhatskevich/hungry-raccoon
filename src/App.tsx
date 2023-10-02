import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import RecipePage from './pages/RecipePage';
import ItalianCuisine from './pages/ItalianCuisine';
import AmericanCuisine from './pages/AmericanCuisine';
import JapaneseCuisine from './pages/JapaneseCuisine';
import IndianCuisine from './pages/IndianCuisine';
import VietnameseCuisine from './pages/VietnameseCuisine';
import { Recipe } from './types';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [popularRecipes, setPopularRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Use an IIFE to avoid calling the async function directly in useEffect
    (async () => {
      try {
        const apiKey = process.env.API_KEY;
        const apiUrl = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=14cbf30851114c3f9f6a2a906916cd22&number=16`
        );
        const data = await apiUrl.json();
        console.log(data);
        setPopularRecipes(data.recipes);
        setIsLoading(false); // Set isLoading to false when data is loaded
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    })();
  }, []); // The empty dependency array ensures this effect runs only once

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Conditionally render HomePage only when recipes data is available */}
          {!isLoading && (
            <Route path="/" element={<HomePage popularRecipes={popularRecipes} />} />
          )}
          <Route path="/recipe/:id" element={<RecipePage />} />
          <Route path="/cuisine/Italian" element={<ItalianCuisine />} />
          <Route path="/cuisine/American" element={<AmericanCuisine />} />
          <Route path="/cuisine/Japanese" element={<JapaneseCuisine />} />
          <Route path="/cuisine/Indian" element={<IndianCuisine />} />
          <Route path="/cuisine/Vietnamese" element={<VietnameseCuisine />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;





