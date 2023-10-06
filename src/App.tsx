import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import RecipePage from './pages/RecipePage';
import CuisinePage from './pages/CusinePage';
import './index.css';
import { Recipe } from './types';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [popularRecipes, setPopularRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
          <Route path="/cuisine/:cuisineName" element={<CuisinePage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;





