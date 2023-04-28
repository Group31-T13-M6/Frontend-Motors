import { Route, Routes } from 'react-router-dom';
import Product from 'src/components/Product';
import DashboardAdm from 'src/pages/DashboardAdm/DashboardAdm';
import DashboardUser from 'src/pages/DashboardUser/DashboardUser';
import LandingPage from 'src/pages/LandingPage';
import Login from 'src/pages/Login/Login';
import Register from 'src/pages/Register/Register';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/registro' element={<Register />} />
      <Route path='/produto/:id' element={<Product />} />
      <Route path='/' element={<LandingPage />}></Route>

      <Route path='/dashboardUsuario' element={<DashboardUser />}>
        <Route path='/dashboardUsuario/produto/:id' element={<Product />} />
      </Route>

      <Route path='/dashboardAdm' element={<DashboardAdm />}>
        <Route path='/dashboardAdm/produto/:id' element={<Product />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
