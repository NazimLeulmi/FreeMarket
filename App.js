import React, { Component } from "react";
import { createSwitchNavigator } from "react-navigation";
import Index from "./screens/login";
import Register from "./screens/register";
console.disableYellowBox = true;

const Router = createSwitchNavigator({
  login: Index,
  register: Register,
}, {
    "initialRouteName": "login"
  });

export default class extends Component {
  render() {
    return <Router/>
  }
}