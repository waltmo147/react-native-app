import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from "./src/screens/Auth/Auth";
import ShareDogScreen from "./src/screens/ShareDog/ShareDog";
import FindDogScreen from "./src/screens/FindDog/FindDog";
import configureStore from "./src/store/configureStore";
import DogDetailScreen from './src/screens/DogDetail/DogDetail';
import SideDrawer from './src/screens/SideDrawer/SideDrawer';

const store = configureStore();


// Register Screens
Navigation.registerComponent("awesome-dogs.AuthScreen", () => AuthScreen, store, Provider);
Navigation.registerComponent("awesome-dogs.ShareDogScreen", () => ShareDogScreen, store, Provider);
Navigation.registerComponent("awesome-dogs.FindDogScreen", () => FindDogScreen, store, Provider);
Navigation.registerComponent("awesome-dogs.DogDetailScreen", () => DogDetailScreen, store, Provider);
Navigation.registerComponent("awesome-dogs.SideDrawer", () => SideDrawer, store, Provider);


// Start an App
export default () => Navigation.startSingleScreenApp({
  screen: {
    screen: "awesome-dogs.AuthScreen",
    title: "Login"
  }
})