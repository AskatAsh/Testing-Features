import { Outlet } from "react-router";
import Header from "./Header";

const AppLayout = () => {
  return (
    <>
      <Header />
      <main className="min-h-[50vh]">
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
