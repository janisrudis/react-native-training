# Mobile App

## Structure

Let's try to follow this approach - [An efficient way to structure React Native projects @cheesecakelabs.com](https://cheesecakelabs.com/blog/efficient-way-structure-react-native-projects)

## Running on Android

Make sure you have everything installed:

- [Android Studio](https://developer.android.com/studio/install), make sure that you download _Android Virtual Device_
- You will need to accept all the licences, _SDK_ is probably somewhere in your home folder and there will be instructions on the first launch

If `./sdkmanager` fails:

- make sure you have Java 8 installed by executing `java -version`. Java 8 can be installed using `sudo apt install openjdk-8-jdk openjdk-8-jre`
- check that you have `JAVA_HOME` environment variable set to Java 8 location

There may be some hacks needed to connect from phone to your development server, read more [here](https://facebook.github.io/react-native/docs/running-on-device#connecting-to-the-development-server-1).

To run application run these two commands in separate terminals:

- `npm run start` to start JS server
- `npx react-native run-android` to launch on device / emulator

To assemble debug apk:

- `npx react-native bundle --dev false --platform android --entry-file index.js --bundle-output ./android/app/src/main/assets/index.android.bundle --assets-dest ./android/app/src/main/res`
- `cd android && ./gradlew assembleDebug`

* APK file is here:
  [here](/home/janis/Jeff-app/jeff-mobile-app/android/app/build/outputs/apk/debug)
