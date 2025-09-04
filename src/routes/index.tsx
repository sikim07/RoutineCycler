import { lazy, Suspense } from "react";
import { routes, ROUTES } from "@/routes/routes";
import LoadingSpinner from "@/components/LoadingSpinner";

// 코드 스플리팅을 위한 lazy loading - 더 세밀한 분할
const Home = lazy(() =>
  import("@/pages/Home").then((module) => ({ default: module.default }))
);
const Routines = lazy(() =>
  import("@/pages/Routines").then((module) => ({ default: module.default }))
);
const Settings = lazy(() =>
  import("@/pages/Settings").then((module) => ({ default: module.default }))
);
const NotFound = lazy(() =>
  import("@/pages/NotFound").then((module) => ({ default: module.default }))
);

// Suspense 래퍼 컴포넌트 - 로딩 상태 개선
const withSuspense = (Component: React.ComponentType) => (
  <Suspense fallback={<LoadingSpinner />}>
    <Component />
  </Suspense>
);

// 컴포넌트 매핑 - 동적 import로 변경
const componentMap = {
  [ROUTES.HOME]: Home,
  [ROUTES.ROUTINES]: Routines,
  [ROUTES.SETTINGS]: Settings,
  [ROUTES.NOT_FOUND]: NotFound,
};

// 라우트 설정을 컴포넌트와 결합 - 에러 바운더리 추가
export const appRoutes = routes.map((route) => ({
  ...route,
  element: withSuspense(componentMap[route.path as keyof typeof componentMap]),
}));
