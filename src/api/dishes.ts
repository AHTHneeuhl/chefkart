import { DishesAdapter } from "adapter";
import chefkartAPI from "./instance";

const URL = "/dishes/v1";
const adapter = new DishesAdapter();

const fetchDishes = async () => {
  try {
    const { data } = await chefkartAPI(URL);
    return adapter.getParseResponse(data);
  } catch (err) {
    console.error(err);
  }
};

export default fetchDishes;
