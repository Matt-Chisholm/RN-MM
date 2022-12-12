import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import ResultsScreen from "./src/screens/ResultsScreen";
import SafetyFiveScreen from "./src/screens/SafetyFiveScreen";
import SafetyFourScreen from "./src/screens/SafetyFourScreen";
import SafetyOneScreen from "./src/screens/SafetyOneScreen";
import SafetyThreeScreen from "./src/screens/SafetyThreeScreen";
import SafetyTwoScreen from "./src/screens/SafetyTwoScreen";

const switchNavigator = createSwitchNavigator({
  SafetyOne: SafetyOneScreen,
  SafetyTwo: SafetyTwoScreen,
  SafetyThree: SafetyThreeScreen,
  SafetyFour: SafetyFourScreen,
  SafetyFive: SafetyFiveScreen,
  Results: ResultsScreen,
});

const App = createAppContainer(switchNavigator);

export default () => {
  return <App />;
};
