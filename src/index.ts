import { NativeModules, Image } from "react-native";

export type Screen = "home" | "lock" | "both";

export type SetWallpaper = (
  source: {
    uri: string;
    screen: Screen;
  },
  cb: () => void
) => void;

export const setWallpaper: SetWallpaper = (source, cb = () => {}) => {
  NativeModules.WallPaperManager.setWallpaper(
    Image.resolveAssetSource(source),
    cb
  );
};
