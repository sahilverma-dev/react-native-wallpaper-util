declare module "react-native-wallpaper-util" {
  interface ImageURISource {
    uri: string;
    screen: "home" | "lock" | "both";
  }

  type Callback = (data: any) => void;

  const setWallpaper: (source: ImageURISource, callback?: Callback) => void;

  export { setWallpaper };
}
