import React from "react";
import { useRoutes } from "react-router-dom";
import TokenFinder from "../pages/TokenFinder";

const Router: React.FC = () => {
  return useRoutes([
    {
      path: "/",
      element: <TokenFinder />,
    },
  ]);
};

export default Router;
