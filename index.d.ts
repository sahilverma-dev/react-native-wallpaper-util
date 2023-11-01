import { ImageURISource } from "react-native";

declare module "react-native-wallpaper-util" {
  interface SetWallpaperOptions {
    uri: string;
    screen: "HOME" | "LOCK" | "BOTH";
  }

  type SetWallpaperCallback = () => void;

  const setWallpaper: (
    source: ImageURISource,
    options: SetWallpaperOptions,
    callback: SetWallpaperCallback
  ) => void;

  export { setWallpaper };
}
