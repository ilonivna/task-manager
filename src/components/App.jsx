import { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import { refresh } from '../redux/auth/operations';
import { selectIsRefreshing } from '../redux/auth/selectors';

const WelcomePage = lazy(() => import("../pages/WelcomePage/WelcomePage"));
const RegisterPage = lazy(() => import("../pages/RegistrationPage/RegistrationPage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));



export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<WelcomePage/>}/>
        <Route path="/register" element={<RestrictedRoute redirectTo="/tasks" component={<RegisterPage/>}/>} />
        <Route path="/login" element={<RestrictedRoute redirectTo="/tasks" component={<LoginPage/>}/>}/>
        <Route path="/tasks" element={<PrivateRoute redirectTo="/" component={<HomePage/>}/>} />
      </Routes>
    </Layout>
  )
};


