import { createAppContainer } from 'react-navigation';
import SearchScreen from "./src/screens/SearchScreen";
import { createStackNavigator } from 'react-navigation-stack';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultsShow: ResultsShowScreen,
}, {
  intialRouteName: "Search",
  defaultNavigationOptions: {
    title: "Restaurant Search"
  }
});

export default createAppContainer(navigator);