import { motion } from "framer-motion";
import PopularRecipes from "../components/PopularRecipes";
import CuisineList from "../components/CuisinesList";
import { useState } from "react";
import Logo from "../components/Logo";
import SearchBar from "../components/SearchBar";
import { Recipe } from "../types";

import WelcomeMessage from "../components/WelcomeMessage/WelcomeMessage";

export default function HomePage({
  popularRecipes,
}: {
  popularRecipes: Recipe[];
}) {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="flex flex-col h-screen bg-gray-200 gap-4">
      <div className="flex-none mb-5">
        {" "}
        {/* Added some bottom margin to push the content below a bit */}
        <Logo />
      </div>
      <div className="flex-grow flex flex-col justify-center items-center mt-20 md:mt-30">
        {" "}
        {/* Changed to justify-center */}
        <div className="mb-3">
          {" "}
          <SearchBar setErrorMessage={setErrorMessage} />
        </div>
        <div className="h-[40px] mb-3">
        {errorMessage && 
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    transition={{ duration: 0.7 }}
                    className="bg-red-100 text-red-700 p-2 rounded mt-4">
                    {errorMessage}
                </motion.div>
            }
            </div>
        <div className="mt-14 md:mt-4">
          <CuisineList />
        </div>
      </div>
      <div className="flex-grow mb-9">
        <PopularRecipes popularRecipes={popularRecipes} />
      </div>
    </div>
  );
}
