declare module "react-native-wallpaper-util" {
  interface ImageURISource {
    uri: string;
    screen: "HOME" | "LOCK" | "BOTH";
  }

  type SetWallpaperCallback = () => void;

  const setWallpaper: (
    source: ImageURISource,
    callback: SetWallpaperCallback
  ) => void;

  export { setWallpaper };
}
