import LoadingPrimary from "@/components/shared/Loading/LoadingPrimary";
import type { RouteObject } from "react-router";

export const extractImageColorRoutes: RouteObject[] = [
  {
    path: "extract-image-color",
    lazy: async () => ({
      Component: (await import("./ExtractImageColor")).default,
    }),
    HydrateFallback: () => <LoadingPrimary />,
  },
];
