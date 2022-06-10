import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearcScreen from "./src/screens/SearchScreen";

const navigator = createStackNavigator(
  {
    Search: SearcScreen,
  },
  {
    initailRouteName: "Search",
    defaultNavigationOptions: {
      title: "Bussiness Search",
    },
  }
);

export default createAppContainer(navigator);
