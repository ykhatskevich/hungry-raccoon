import PopularRecipes from "../components/PopularRecipes";
import CuisineList from "../components/CuisinesList";

import Logo from "../components/Logo";
import SearchBar from "../components/SearchBar";
import { Recipe } from "../types";
import WelcomeMessage from "../components/WelcomeMessage/WelcomeMessage";

export default function HomePage ({ popularRecipes }: { popularRecipes: Recipe[] }) {

 

    return (
        <div className="flex flex-col h-screen bg-gray-200 gap-2">
            <div className="flex-none mb-5"> {/* Added some bottom margin to push the content below a bit */}
                <Logo />
            </div>
            <div className="flex-grow flex flex-col justify-center items-center mt-20"> {/* Changed to justify-center */}
                <div className="mb-8"> {/* Increased the bottom margin for a bit more spacing */}
                    <SearchBar />
                </div>
                <div>
                    <CuisineList />
                </div>
            </div>
            <div className="flex-grow mb-9">
                <PopularRecipes popularRecipes={popularRecipes}/>
            </div>
        </div>
    )
}





