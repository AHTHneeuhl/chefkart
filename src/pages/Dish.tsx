import { Appliances, Banner, Spices, Vegetables } from "components/dish";
import { Main } from "./styles";

const Dish: React.FC = () => {
  return (
    <Main>
      <Banner />
      <Vegetables />
      <Spices />
      <Appliances />
    </Main>
  );
};

export default Dish;
