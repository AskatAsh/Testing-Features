import { Button } from "@/components/ui/button";
import axios from "axios";
import { FileDown, Loader } from "lucide-react";
import { useRef, useState } from "react";
import DemoTemplate from "../components/DemoTemplate/DemoTemplate";
import templateCSS from "../components/DemoTemplate/demoTemplate.css?inline";
import useGenerateHtmlString from "../hooks/useGenerateHtmlString";

const DownloadPdf = () => {
  const templateRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const htmlStringResult = useGenerateHtmlString();

  const downloadPdf = async () => {
    const title = "Invoice";
    try {
      // 1. Get HTML string with css styles
      const templateHtml = templateRef.current?.outerHTML as string;
      const htmlString = htmlStringResult({ templateHtml, templateCSS, title });

      setLoading(true);

      // console.log(htmlString);

      // 2. Call backend
      const response = await axios.post(
        "https://generate-pdf-pi.vercel.app/generate-pdf",
        // "http://localhost:5000/generate-pdf",
        { html: htmlString },
        {
          responseType: "blob",
          headers: { "Content-Type": "application/json" },
        }
      );
      //   console.log(response);

      // 3. Trigger download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "invoice.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <section className="container-fluid flex flex-wrap gap-3 justify-between items-center mb-6 pb-4 border-b">
        <h1 className="text-3xl text-foreground font-medium">
          Generate and download pdf template
        </h1>
        <Button
          size="lg"
          className="bg-primary text-white [&_svg:not([class*='size-'])]:size-6 flex-1 sm:flex-none"
          onClick={downloadPdf}
        >
          {loading ? <Loader className="animate-spin" /> : <FileDown />}
          Download PDF
        </Button>
      </section>

      {/* demo template */}
      <section className="bg-muted p-4 mt-8 overflow-auto text-[#333]">
        <div ref={templateRef}>
          <DemoTemplate />
        </div>
      </section>
    </main>
  );
};

export default DownloadPdf;
