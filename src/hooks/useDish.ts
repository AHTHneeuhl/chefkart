import { useQuery } from "@tanstack/react-query";
import fetchDish from "api/dish";

const useDish = (dishId: string) => {
  const { data: dish, isLoading } = useQuery({
    queryKey: ["dish", dishId],
    queryFn: () => fetchDish({ dishId }),
  });

  return { dish, isLoading };
};

export default useDish;
