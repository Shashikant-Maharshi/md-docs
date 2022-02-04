import React, { lazy } from 'react';

import {
  Route,
  Routes,
} from "react-router-dom";

const LandingPage = lazy(
  () => import('../LandingPage/LandingPage'),
);

const Login = lazy(
  () => import('../Login/Login'),
);

const Registration = lazy(
  () => import('../Registration/Registration'),
);

const PageNotFound = lazy(
  () => import('../PageNotFound/PageNotFound'),
);

const LoggedOutRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}>
        <Route path="registration" element={<Registration />} />
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default LoggedOutRoutes;
