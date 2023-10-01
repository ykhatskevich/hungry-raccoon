import PopularRecipes from "../components/PopularRecipes";
import CuisineList from "../components/CuisinesList";

import Logo from "../components/Logo";
import SearchBar from "../components/SearchBar";
import { Recipe } from "../types";
import WelcomeMessage from "../components/WelcomeMessage/WelcomeMessage";

export default function HomePage ({ popularRecipes }: { popularRecipes: Recipe[] }) {

   

    return (
        <div className="flex flex-col h-screen bg-gray-200 gap-2">
            <div className="flex flex-col h-screen">
            <Logo />
    
            </div>
            <div className="flex items-center justify-center mb-14">
            <SearchBar />
            </div>
            <div className="flex-grow flex items-center justify-center mb-6">
            
            <CuisineList />
            </div>
            <div className="flex-none mb-9">       
            <PopularRecipes popularRecipes={popularRecipes}/>
            </div>   
        </div>
       
    )
}





