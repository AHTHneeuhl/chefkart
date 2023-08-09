import { useQuery } from "@tanstack/react-query";
import fetchDishes from "api/dishes";

const useDishes = () => {
  const { data: dishes, isLoading } = useQuery({
    queryKey: ["dishes"],
    queryFn: () => fetchDishes(),
  });

  return { dishes, isLoading };
};

export default useDishes;
