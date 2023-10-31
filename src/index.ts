import { NativeModules, Image } from "react-native";
import { Source } from "./interfaces";

export const setWallpaper = (source: Source, callback: () => void) => {
  NativeModules.WallPaperManager.setWallpaper(
    {
      ...Image.resolveAssetSource(source),
    },
    callback
  );
};
