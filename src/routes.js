import React from "react";
const UsersList = React.lazy(() => import("./pages/UsersList/UsersList.jsx"));
const Test = React.lazy(() => import("./pages/Test/Test"));
const UserProfile = React.lazy(() =>
  import("./pages/UserProfile/UserProfile.jsx")
);
const CreateUser = React.lazy(() => import("./pages/CreateUser/CreateUser"));
const Login = React.lazy(() => import("./pages/Login/Login"));

const routes = [
  { path: "/login", expect: true, component: Login, loginRequired: false },
  { path: "/", expect: true, component: UsersList, loginRequired: true },
  {
    path: "/:id(\\d+)",
    expect: true,
    component: UserProfile,
    loginRequired: true,
  },
  { path: "/create", expect: true, component: CreateUser, loginRequired: true },
  { path: "/test", expect: true, component: Test, loginRequired: true },
];

export default routes;
