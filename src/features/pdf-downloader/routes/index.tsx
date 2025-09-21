import LoadingPrimary from "@/components/shared/Loading/LoadingPrimary";
import type { RouteObject } from "react-router";

export const pdfDownloaderRoutes: RouteObject[] = [
  {
    path: "download-pdf",
    lazy: async () => ({
      Component: (await import("./DownloadPdf")).default,
    }),
    HydrateFallback: () => <LoadingPrimary />,
  },
];
