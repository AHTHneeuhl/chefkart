import { Dishes, PopularDishes, Recommended } from "components/dishes";
import { DateTimeCard } from "components/ui";

const Home: React.FC = () => {
  return (
    <>
      <DateTimeCard />
      <Recommended />
      <PopularDishes />
      <Dishes />
    </>
  );
};

export default Home;
