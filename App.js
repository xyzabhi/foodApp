import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import "react-native-gesture-handler";
import SearcScreen from "./src/screens/SearchScreen";
import ResultShowScreen from "./src/screens/ResultShowScreen";

const navigator = createStackNavigator(
  {
    Search: SearcScreen,
    ResultShow: ResultShowScreen,
  },
  {
    initailRouteName: "Search",
    defaultNavigationOptions: {
      title: "Bussiness Search",
    },
  }
);

export default createAppContainer(navigator);
