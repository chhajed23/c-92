import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { AppTabNavigator } from "./components/appTabNavigator";
import Calender from "./screens/calender";

export default function App() {
  return <AppContainer />;
}

const switchNavigator = createSwitchNavigator({
  AppTabNavigator: { screen: AppTabNavigator },
  
});

const AppContainer = createAppContainer(switchNavigator);


