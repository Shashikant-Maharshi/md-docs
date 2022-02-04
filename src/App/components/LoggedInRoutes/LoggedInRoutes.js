import React, { lazy } from 'react';

import { Routes, Route } from "react-router-dom";

const Docs = lazy(
  () => import('../../../Docs/Docs'),
);

const Logout = lazy(
  () => import('../Logout/Logout'),
);

const PageNotFound = lazy(
  () => import('../PageNotFound/PageNotFound'),
);

const LoggedInRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Docs />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default LoggedInRoutes;
