import type { RouteObject } from "react-router";

export const extractImageColorRoutes: RouteObject[] = [
  {
    path: "extract-image-color",
    lazy: async () => ({
      Component: (await import("./ExtractImageColor")).default,
    }),
    HydrateFallback: () => <div>Loading...</div>,
  },
];
