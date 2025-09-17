import { Vibrant } from "node-vibrant/browser";
import React, { useEffect, useRef, useState } from "react";
import type { TSong } from "../types";
interface NowPlayingProps {
  song: TSong;
  colorPalette: string;
}

const NowPlaying: React.FC<NowPlayingProps> = ({ song, colorPalette }) => {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [bgColor, setBgColor] = useState<string>("rgba(17, 24, 39, 1)");
  const [theme, setTheme] = useState({ bodyTextColor: "#fff" });

  useEffect(() => {
    if (!song.image) return;

    // Use Vibrant to extract palette
    // const v = new Vibrant(song.image, {
    //   colorCount: 80,
    //   quality: 2,
    // });
    // v.getPalette()

    Vibrant.from(song.image)
      .maxColorCount(200)
      .quality(2)
      .getPalette()
      .then((palette) => {
        if (palette[colorPalette]) {
          const rgb = palette[colorPalette].rgb; // [r, g, b]
          setBgColor(`rgba(${rgb.join(",")}, 1)`);
          setTheme({
            bodyTextColor: `${palette[colorPalette].bodyTextColor}`,
          });
        }
      })
      .catch((err) => {
        console.error("Vibrant error:", err);
      });
  }, [song.image, colorPalette]);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{
        backgroundColor: bgColor,
        transition: "background-color 0.5s ease-in-out",
      }}
    >
      <img
        ref={imageRef}
        src={song.image}
        alt={song.title}
        className="w-64 h-64 object-cover aspect-square rounded-lg shadow-lg"
      />
      <h2 style={{ color: theme.bodyTextColor }} className={`text-2xl mt-4`}>
        {song.title}
      </h2>
      <p style={{ color: theme.bodyTextColor }} className={`text-lg`}>
        {song.artist}
      </p>
    </div>
  );
};

export default NowPlaying;
