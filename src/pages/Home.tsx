import { Dishes, PopularDishes } from "components";

const Home: React.FC = () => {
  return (
    <>
      <PopularDishes />
      <Dishes />
    </>
  );
};

export default Home;
