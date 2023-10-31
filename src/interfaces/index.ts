import { ImageSourcePropType } from "react-native";

export type Source = ImageSourcePropType & {
  screen: Screen;
};

export type Screen = "HOME" | "LOCK" | "BOTH";
