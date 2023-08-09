import { DishAdapter } from "adapter";
import chefkartAPI from "./instance";

type TDishApiPayload = {
  dishId: string;
};

const URL = "/dishes/v1";
const adapter = new DishAdapter();

const fetchDish = async ({ dishId }: TDishApiPayload) => {
  try {
    const { data } = await chefkartAPI(`${URL}/${dishId}`);
    return adapter.getParseResponse(data);
  } catch (err) {
    console.error(err);
  }
};

export default fetchDish;
