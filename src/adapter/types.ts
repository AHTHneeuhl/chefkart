export interface IDishes {
  dishes: TDish[];
  popularDishes: TPopularDish[];
}

export type TDish = {
  name: string;
  rating: number;
  description: string;
  equipments: string[];
  image: string;
  id: number;
};

export type TPopularDish = {
  name: string;
  image: string;
  id: number;
};

export interface IDishWithIngredients {
  name: string;
  id: number;
  timeToPrepare: string;
  ingredients: {
    vegetables: TVegetable[];
    spices: TSpice[];
    appliances: TAppliance[];
  };
}

type TVegetable = {
  name: string;
  quantity: string;
};

type TAppliance = {
  name: string;
  image: string;
};

type TSpice = {
  name: string;
  quantity: string;
};
