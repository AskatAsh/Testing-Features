import { Info } from "lucide-react";
import { Link } from "react-router";

type NewFeatureProps = {
  title: string;
  link: string;
  linkText: string;
};

const NewFeatureAdded = ({ title, link, linkText }: NewFeatureProps) => {
  return (
    <div className="p-4 border border-primary bg-primary/10 flex items-center my-6 rounded-md gap-2 text-sm sm:text-lg font-medium">
      <Info className="text-primary shrink-0" />
      {title ? title : `New Feature Added (${Date.now().toLocaleString()})`}:
      <Link to={link ? link : "#"} className="hover:underline text-primary">
        {linkText ? linkText : "Feature link"}
      </Link>
    </div>
  );
};

export default NewFeatureAdded;
