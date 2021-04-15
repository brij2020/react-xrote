import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import routes from "./RouteList";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const InternalRoute = () => {
  return (
    <>
      <Router>
        <Switch>
          {routes.map(({ path, Component, access }) =>
            access === "private" ? (
              <PrivateRoute exact={true} path={path} key={uuidv4()}>
                <Suspense fallback={<div>Loading</div>}>
                  <Component />
                </Suspense>
              </PrivateRoute>
            ) : (
              <PublicRoute exact={true} path={path} key={uuidv4()}>
                <Component />
              </PublicRoute>
            )
          )}
        </Switch>
      </Router>
    </>
  );
};
export default InternalRoute;
