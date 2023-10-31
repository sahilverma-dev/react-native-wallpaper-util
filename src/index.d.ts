import { Source } from "./interfaces/index";

declare module "react-native-wallpaper" {
  export function setWallpaper(source: Source, callback: () => void): void;
}
