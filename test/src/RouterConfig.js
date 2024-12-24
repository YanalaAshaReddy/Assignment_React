import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import OverallviewPage from "./pages/OverallviewPage";
const RouterConfig = () => {
return useRoutes ([
{ path: "/", element: <OverallviewPage /> },
{ path: "*",element: <NotFound /> },
{
path: "Home",
element: <Home />
},
]);
};
export default RouterConfig;