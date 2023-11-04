declare module "react-native-wallpaper-util" {
  interface ImageURISource {
    uri: string;
    screen: "HOME" | "LOCK" | "BOTH";
    callback?: SetWallpaperCallback;
  }

  type SetWallpaperCallback = () => void;

  const setWallpaper: (source: ImageURISource) => void;

  export { setWallpaper };
}
