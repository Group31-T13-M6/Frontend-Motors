import { Route, Routes } from "react-router-dom";
import Product from "src/components/Product";
import LandingPage from "src/pages/LandingPage";
import Login from "src/pages/Login/Login";
import Profile from "src/pages/Profile";
import Register from "src/pages/Register/Register";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Register />} />
      <Route path="/produto/:id" element={<Product />} />
      <Route path="/profile/:id" element={<Profile />} />
    </Routes>
  );
};

export default MainRoutes;
