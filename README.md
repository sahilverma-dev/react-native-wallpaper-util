# React Native Wallpaper Utility Function

This utility function provides a simple way to set wallpapers on your React Native application. It is an enhanced version based on the work of [Ajay Bhatia](https://github.com/ajaybhatia), who originally created the [react-native-wallpaper-manager](https://github.com/ajaybhatia/react-native-wallpaper-manager) library. The original repository is currently not maintained and lacks TypeScript support.

## Installation

You can install this package via npm:

```bash
npm install react-native-wallpaper-util
```

## Usage

Here's how you can use the setWallpaper function to set wallpapers:

```javascript
import { setWallpaper } from "react-native-wallpaper-util";

// Define the image source and callback function
const imageSource = {
  uri: "your-image-uri",
  screen: "HOME", // or "LOCK", or "BOTH"
};

const callback = () => {
  console.log("Wallpaper set successfully.");
};

// Set the wallpaper
setWallpaper(imageSource, callback);
```

## Platform-Specific FAQs

### Platform Compatibility

- This package is designed for Android OS and is not compatible with iOS.

### Expo Compatibility

- This package can be used with Expo, but please note that it will only work when you use the development client or build a standalone APK.
- It will not work with the Expo Go app.

## Credits

- The original code and inspiration for this package come from [Ajay Bhatia's](https://github.com/ajaybhatia) [react-native-wallpaper-manager](https://github.com/ajaybhatia/react-native-wallpaper-manager) repository.
- This package was created to provide enhanced functionality and TypeScript support.

##License
This package is open-source and available under the MIT License.
