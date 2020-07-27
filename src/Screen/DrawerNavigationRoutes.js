import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Dashboard from './drawerScreens/Dashboard';
import Theme from './drawerScreens/Theme'
import CustomSidebarMenu from './Components/CustomSidebarMenu';
import NavigationDrawerHeader from './Components/NavigationDrawerHeader';

const FirstActivity_StackNavigator = createStackNavigator({
  First: {
    screen: Dashboard,
    navigationOptions: ({ navigation }) => ({
      title: 'Dashboard',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#5f9ea0',
      },
      headerTintColor: '#fff',
    }),
  },
});

const SecondActivity_StackNavigator = createStackNavigator({
  First: {
    screen: Theme,
    navigationOptions: ({ navigation }) => ({
      title: 'Change Theme',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    }),
  },
});

const DrawerNavigatorRoutes = createDrawerNavigator(
  {
    Dashboard: {
      screen: FirstActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Dashboard',
      },
    },
    APIHit: {
      screen: SecondActivity_StackNavigator,
    },
  },
  {
    contentComponent: CustomSidebarMenu,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  }
);
export default DrawerNavigatorRoutes;