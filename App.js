import * as React from "react";
import { Text, StyleSheet, View } from "react-native"
import { createStackNavigator } from "@react-navigation/stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../Screens/home"
import DetailsScreen from "../Screens/details"

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    )
  }
}

const StackNavigator = createStackNavigator({

  Home: {
    screen: HomeScreen,
    navigationOptions: { headerShown: false }
  },

  Details: {
    screen: DetailsScreen,
    navigationOptions: { headerShown: false }
  },

  initialRouteName: "Home"
})

const AppContainer = createAppContainer(StackNavigator)