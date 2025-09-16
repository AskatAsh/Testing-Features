import { ThemeProvider } from "@/components/theme/ThemeProvider";
import type { PropsWithChildren } from "react";
// import { store } from "@/store";
// import { Provider as ReduxProvider } from "react-redux";

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      {/* <ReduxProvider store={store}> */}
      {children}
      {/* </ReduxProvider> */}
    </ThemeProvider>
  );
}
