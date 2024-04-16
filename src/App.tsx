import { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";

const RoutePage = lazy(() => import("./route/Router"));
const Skeleton = lazy(() => import("./apps/Skeleton"));

import "./styels/_globals.scss";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Skeleton />} />
      <RoutePage />
    </BrowserRouter>
  );
}

export default App;
