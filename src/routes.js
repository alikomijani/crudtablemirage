import React from "react";
const UsersList = React.lazy(() => import("./pages/UsersList/UsersList.jsx"));
const Test = React.lazy(() => import("./pages/Test/Test"));
const UserProfile = React.lazy(() =>
  import("./pages/UserProfile/UserProfile.jsx")
);
const CreateUser = React.lazy(() => import("./pages/CreateUser/CreateUser"));
const Login = React.lazy(() => import("./pages/Login/Login"));

const routes = [
  { path: "/login", exact: true, component: Login, loginRequired: false },
  { path: "/", exact: true, component: UsersList, loginRequired: true },
  {
    path: "/:id(\\d+)",
    exact: true,
    component: UserProfile,
    loginRequired: true,
  },
  { path: "/create", exact: true, component: CreateUser, loginRequired: true },
  { path: "/test", exact: true, component: Test, loginRequired: true },
];

export default routes;
