import {
  Appliances,
  Banner,
  Ingredients,
  Spices,
  Vegetables,
} from "components/dish";
import { Main } from "./styles";

const Dish: React.FC = () => {
  return (
    <Main>
      <Banner />
      <Ingredients />
      <Vegetables />
      <Spices />
      <Appliances />
    </Main>
  );
};

export default Dish;
