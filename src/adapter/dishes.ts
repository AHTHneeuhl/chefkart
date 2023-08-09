import { TDish, IDishes, TPopularDish } from "./types";

type TAPIResponse = {
  dishes: TDish[];
  popularDishes: TPopularDish[];
};

class DishesAdapter {
  private parseResponse(response: TAPIResponse): IDishes {
    return {
      dishes: response.dishes,
      popularDishes: response.popularDishes,
    };
  }

  getParseResponse = (response: TAPIResponse) => {
    return this.parseResponse(response);
  };
}

export default DishesAdapter;
