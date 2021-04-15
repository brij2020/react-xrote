import React from "react";
import { Redirect, Route } from "react-router-dom";
const isLogin = false;
const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (isLogin ? children : <Redirect to="/login" />)}
    />
  );
};
export default PrivateRoute;
