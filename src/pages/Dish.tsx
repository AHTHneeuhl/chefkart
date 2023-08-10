import { Appliances, Banner, Spices, Vegetables } from "components/dish";

const Dish: React.FC = () => {
  return (
    <>
      <Banner />
      <Vegetables />
      <Spices />
      <Appliances />
    </>
  );
};

export default Dish;
