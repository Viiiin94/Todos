import { lazy } from "react";
import { Routes, Route, Outlet } from "react-router-dom";

const Main = lazy(() => import("../apps/Main/index"));
const Todos = lazy(() => import("../apps/Todos/index"));

const Router = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route path="/" element={<Main />} />
        <Route path="/todos" element={<Todos />} />
      </Route>
    </Routes>
  );
};

export default Router;
