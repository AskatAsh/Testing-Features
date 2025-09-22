import NewFeatureAdded from "@/components/shared/FeatureNotification/NewFeatureAdded";

const Home = () => {
  return (
    <div className="container-fluid py-8 border-l border-r">
      <h1 className="text-3xl font-bold">This is the home page</h1>

      {/* Feature added: extract color from images */}
      <NewFeatureAdded
        title="New Feature Added (21 September, 2025)"
        link="/download-pdf"
        linkText="PDF Downloader using Puppeteer"
      />

      {/* Feature added: extract color from images */}
      <NewFeatureAdded
        title="New Feature Added (19 September, 2025)"
        link="/extract-image-color"
        linkText="Extract Colors from Image"
      />
    </div>
  );
};

export default Home;
