import { useCallback } from "react";

type GenerateHtmlOptions = {
  templateHtml: string;
  templateCSS: string;
  title: string;
};

const useGenerateHtmlString = () => {
  return useCallback(
    ({
      templateHtml,
      templateCSS = "",
      title = "Document",
    }: GenerateHtmlOptions) => {
      return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <title>${title}</title>
          <style>${templateCSS}</style>
        </head>
        <body style="background-color: #fff; color: #333;">${templateHtml}</body>
      </html>
    `;
    },
    []
  );
};

export default useGenerateHtmlString;
