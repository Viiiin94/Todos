import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Layout = lazy(() => import("./Layout"));
const Main = lazy(() => import("../apps/Main/index"));
const Todos = lazy(() => import("../apps/Todos/index"));

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/todos" element={<Todos />} />
      </Route>
    </Routes>
  );
};

export default Router;
