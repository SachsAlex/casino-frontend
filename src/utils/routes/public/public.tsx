import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserContext from "../../../components/common/userContext";

const PublicRoute = () => {
  const { user } = useContext(UserContext);
  return user ? <Navigate to="/lobby" /> : <Outlet />;
};

export default PublicRoute;
