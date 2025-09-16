import { Info } from "lucide-react";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="container-fluid py-8 border-l border-r">
      <h1 className="text-3xl font-bold">This is the home page</h1>

      <div className="p-4 border border-primary bg-primary/10 flex items-center my-6 rounded-md gap-3 text-lg font-medium">
        <Info className="text-primary" /> New Feature Added:{" "}
        <Link to="/extract-image-color" className="underline text-primary">
          Extract Colors from Image
        </Link>
      </div>
    </div>
  );
};

export default Home;
