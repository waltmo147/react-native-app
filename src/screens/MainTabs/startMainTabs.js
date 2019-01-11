import { Navigation } from 'react-native-navigation';
import Icon from "react-native-vector-icons/Ionicons";
import { Platform } from 'react-native';


const startTabs = () => {
  Promise.all([
    Icon.getImageSource(Platform.OS === 'android' ? "md-map" : "ios-map", 30),
    Icon.getImageSource(Platform.OS === 'android' ? "md-share-alt" : "ios-share-alt", 30),
    Icon.getImageSource(Platform.OS === 'android' ? "md-menu" : "ios-menu", 30),

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
      tabsStyle: {
        tabBarSelectedButtonColor: "orange"
      },
      drawer: {
        left: {
          screen: "awesome-dogs.SideDrawer",
        }
      },
      appStyle: {
        tabBarSelectedButtonColor: "orange"
      },
    });
  });

}

export default startTabs;
