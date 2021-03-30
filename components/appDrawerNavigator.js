import * as React from "react";
import { Icon } from "react-native-elements";
import { createDrawerNavigator } from "react-navigation-drawer";
import CalenderScreen from "../screens/calender";
import { AppTabNavigator } from "./appTabNavigator";
import CustomSideBarMenu from './CustomSideBarMenu';
import Setting from '../screens/settings';

export const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: CalenderScreen,
      navigationOptions: {
        drawerIcon: <Icon name="calendar" type="fontAwesome" />,
      },
    },
    Settings: { screen: Setting,
      navigationOptions:{
        drawerIcon:<Icon name="settings" type="fontawesome5"/>,
        drawerLabel:"Settings"
      } },
  },
  { contentComponent: CustomSideBarMenu },
  { initialRouteName: "Calender" }
);
