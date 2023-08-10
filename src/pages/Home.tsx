import {
  DishTypes,
  Dishes,
  PopularDishes,
  Recommended,
} from "components/dishes";
import { Cart, DateTimeCard } from "components/ui";

const Home: React.FC = () => {
  return (
    <>
      <DateTimeCard />
      <DishTypes />
      <Recommended />
      <PopularDishes />
      <Dishes />
      <Cart />
    </>
  );
};

export default Home;
