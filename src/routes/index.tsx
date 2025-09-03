import { lazy, Suspense } from "react";
import { routes, ROUTES } from "./routes";
import LoadingSpinner from "../components/LoadingSpinner";

// 코드 스플리팅을 위한 lazy loading
const Home = lazy(() => import("../pages/Home"));
const Routines = lazy(() => import("../pages/Routines"));
const Settings = lazy(() => import("../pages/Settings"));
const NotFound = lazy(() => import("../pages/NotFound"));

// Suspense 래퍼 컴포넌트
const withSuspense = (Component: React.ComponentType) => (
  <Suspense fallback={<LoadingSpinner />}>
    <Component />
  </Suspense>
);

// 컴포넌트 매핑
const componentMap = {
  [ROUTES.HOME]: Home,
  [ROUTES.ROUTINES]: Routines,
  [ROUTES.SETTINGS]: Settings,
  [ROUTES.NOT_FOUND]: NotFound,
};

// 라우트 설정을 컴포넌트와 결합
export const appRoutes = routes.map((route) => ({
  ...route,
  element: withSuspense(componentMap[route.path as keyof typeof componentMap]),
}));
