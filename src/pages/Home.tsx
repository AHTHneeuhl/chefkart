import { useDishes } from "hooks";

const Home: React.FC = () => {
  const { dishes, isLoading } = useDishes();
  console.log(dishes, isLoading);

  return null;
};

export default Home;
