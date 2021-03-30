import * as React from "react";
import { createStackNavigator } from "react-navigation-stack";
import CalenderScreen from "../screens/calender";
import FillDailyMilk from "../screens/fillDailyMilk";

export const AppStackNavigator = createStackNavigator(
  {
    Calendar: {
      screen: CalenderScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    FillMilk: {
      screen: FillDailyMilk,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: "Calendar",
  }
);
