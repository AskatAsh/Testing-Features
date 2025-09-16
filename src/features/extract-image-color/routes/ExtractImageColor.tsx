import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { songs } from "@/features/extract-image-color/utils/songs";
import { useState } from "react";
import NowPlaying from "../components/NowPlaying";

const ExtractImageColor = () => {
  const [colorPalette, setColorPalette] = useState<string>("");

  return (
    <div className="py-8 border-l border-r">
      <section className="container-fluid flex justify-between items-center mb-6 pb-4 border-b">
        <h1 className="text-3xl font-bold">Extract Colors from Image</h1>
        <Select
          value={colorPalette}
          onValueChange={(value) => setColorPalette(value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Palette" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select Palette</SelectLabel>
              <SelectItem value="Vibrant">Vibrant</SelectItem>
              <SelectItem value="DarkMuted">DarkMuted</SelectItem>
              <SelectItem value="DarkVibrant">DarkVibrant</SelectItem>
              <SelectItem value="LightMuted">LightMuted</SelectItem>
              <SelectItem value="LightVibrant">LightVibrant</SelectItem>
              <SelectItem value="Muted">Muted</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </section>

      {/* Now playing songs */}
      <section>
        {songs.map((song) => (
          <NowPlaying key={song.id} song={song} colorPalette={colorPalette} />
        ))}
      </section>
    </div>
  );
};

export default ExtractImageColor;
