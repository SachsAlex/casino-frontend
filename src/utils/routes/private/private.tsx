import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import UserContext from "../../../components/common/userContext";

const PrivateRoute = () => {
  const { user } = useContext(UserContext);
  return user ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
