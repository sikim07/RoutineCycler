import type { RouteObject } from "react-router-dom";

// 라우트 경로 상수
export const ROUTES = {
  HOME: "/",
  ROUTINES: "/routines",
  SETTINGS: "/settings",
  NOT_FOUND: "*",
} as const;

// 라우트 메타데이터 타입
export interface RouteMetadata {
  title: string;
  description: string;
  requiresAuth?: boolean;
}

// 라우트 메타데이터
export const routeMetadata: Record<string, RouteMetadata> = {
  [ROUTES.HOME]: {
    title: "Home",
    description: "Welcome to Routine Cycler",
  },
  [ROUTES.ROUTINES]: {
    title: "My Routines",
    description: "Manage your daily routines",
  },
  [ROUTES.SETTINGS]: {
    title: "Settings",
    description: "Configure your app preferences",
  },
  [ROUTES.NOT_FOUND]: {
    title: "Page Not Found",
    description: "The page you're looking for doesn't exist",
  },
};

// 라우트 설정
export const routes: RouteObject[] = [
  {
    path: ROUTES.HOME,
    element: null, // App.tsx에서 동적으로 설정
  },
  {
    path: ROUTES.ROUTINES,
    element: null,
  },
  {
    path: ROUTES.SETTINGS,
    element: null,
  },
  {
    path: ROUTES.NOT_FOUND,
    element: null,
  },
];
