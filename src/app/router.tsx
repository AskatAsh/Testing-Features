import AppLayout from "@/components/layouts/AppLayout";
import { extractImageColorRoutes } from "@/features/extract-image-color/routes";
import { createBrowserRouter, type RouteObject } from "react-router";

const rootChildren: RouteObject[] = [
  // common page routes
  {
    index: true,
    lazy: async () => ({
      Component: (await import("@/pages/Home/Home")).default,
    }),
    HydrateFallback: () => <div>Loading...</div>,
  },
  // feature related routes
  ...extractImageColorRoutes,
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: rootChildren,
  },
]);
