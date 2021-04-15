import React from "react";
import * as path from "../Constant/Route";

const Default = () => <div> "/"</div>;
const Home  = React.lazy(() => import("../Component/Home"))
const Checkout  = React.lazy(() => import("../Component/Checkout"))
const Login = (props) => {
  return <div>Login</div>;
};
const FO4 = () => <div> 404 page</div>;
const routes = [
  {
    path: path.CHECKOUT,
    Component:Checkout,
    access: 'private'
  },
  {
    path: path.HOME,
    Component: Home,
    access: 'private'
  },
  {
    path: path.LOGIN,
    Component: Login,
    access: 'public'
  },
  {
    path: path.DEFAULT,
    Component: Default,
    access: 'public'
  },
  {
    path: path.FOUR_O_FOUR,
    Component: FO4,
    access: 'public'
  }
];
export default routes;
