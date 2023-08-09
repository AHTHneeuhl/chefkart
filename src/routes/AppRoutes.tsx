import { DishPage, HomePage } from "pages";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dish/:id" element={<DishPage />} />
    </Routes>
  );
};

export default AppRoutes;
