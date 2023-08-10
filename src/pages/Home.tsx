import {
  DishTypes,
  Dishes,
  PopularDishes,
  Recommended,
} from "components/dishes";
import { Cart, DateTimeCard } from "components/ui";
import { Main } from "./styles";

const Home: React.FC = () => {
  return (
    <Main>
      <DateTimeCard />
      <DishTypes />
      <Recommended />
      <PopularDishes />
      <Dishes />
      <Cart />
    </Main>
  );
};

export default Home;
