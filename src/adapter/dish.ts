import { IDishWithIngredients } from "./types";

interface TAPIResponse extends IDishWithIngredients {}

class DishAdapter {
  private parseResponse(response: TAPIResponse): IDishWithIngredients {
    return {
      id: response.id,
      name: response.name,
      timeToPrepare: response.timeToPrepare,
      ingredients: response.ingredients,
    };
  }

  getParseResponse = (response: TAPIResponse) => {
    return this.parseResponse(response);
  };
}

export default DishAdapter;
