import { useDish } from "hooks";
import { useParams } from "react-router-dom";

const Dish: React.FC = () => {
  const { id } = useParams();

  const { dish, isLoading } = useDish(id!);

  console.log(dish, isLoading);

  return null;
};

export default Dish;
