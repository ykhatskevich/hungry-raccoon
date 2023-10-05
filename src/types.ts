export interface Recipe {
    id: number;
    title: string;
    image: string;
    summary: string;
  }


  export interface RecipeDetails {
    id: number;
    title: string;
    image: string;
    servings: number;
    readyInMinutes: number;
    summary: string;
    instructions:string;
    license: string;
    winePairing: {
      pairingText: string;
    };
    extendedIngredients: ExtendedIngredient[];
  }

  export interface ExtendedIngredient {
    id: number;
    nameClean: string;
    image: string;
    amount: number;
    unit: string;
    original: string;
  }
