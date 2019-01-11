import { Navigation } from 'react-native-navigation';
import Icon from "react-native-vector-icons/Ionicons";


const startTabs = () => {
  Promise.all([
    Icon.getImageSource("md-map", 30),
    Icon.getImageSource("ios-share-alt", 30),
    Icon.getImageSource("ios-menu", 30),

  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: "awesome-dogs.FindDogScreen",
          label: "Find Dog",
          title: "Find Dog",
          icon: sources[0],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[2],
                title: "Menu",
                id: "sideDrawerToggle"
              }
            ]
          }
        },
        {
          screen: "awesome-dogs.ShareDogScreen",
          label: "Share Dog",
          title: "Share Dog",
          icon: sources[1],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[2],
                title: "Menu",
                id: "sideDrawerToggle"
              }
            ]
          }
        }
      ],
      drawer: {
        left: {
          screen: "awesome-dogs.SideDrawer",
        }
      }
    });
  });

}

export default startTabs;
