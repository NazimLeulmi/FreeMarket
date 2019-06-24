import React, { Component } from 'react';
import { Text } from "react-native";
import {
  Container, LogoText, Inp,
  Input, InpIcon, Avoid, Btn, Forget, colors, Logo
}
  from "./login";
import styled from "styled-components/native";

export default class Register extends Component {
  render() {
    return (
      <Container style={{ paddingBottom: 100 }}>
        <LogoText>FreeMarket</LogoText>
        <Logo source={require("../assets/pics/bag.png")} />
        <Avoid >
          <Inp>
            <Input placeholder="EMAIL" type="email"
              autoCapitalize="none"
              autoCorrect={false}
              autoCompleteType="off"
              placeholderTextColor="white"
              selectionColor={"red"}
            />
            <InpIcon name="mail" color={colors.comet} />
          </Inp>
          <Inp>
            <Input placeholder="PASSWORD" type="password"
              autoCapitalize="none"
              autoCorrect={false}
              autoCompleteType="off"
              placeholderTextColor="white"
              selectionColor={"red"}
              secureTextEntry={true}
            />
            <InpIcon name="lock" color={colors.comet} />
          </Inp>
          <Inp>
            <Input placeholder="PASSWORD CONFIRMATION" type="password"
              autoCapitalize="none"
              autoCorrect={false}
              autoCompleteType="off"
              placeholderTextColor="white"
              selectionColor={"red"}
              secureTextEntry={true}
            />
            <InpIcon name="lock" color={colors.comet} />
          </Inp>
          <Btn >
            <Text style={{ color: "white", fontSize: 20 }}>REGISTER</Text>
          </Btn>
        </Avoid>
        <Forget onPress={() => this.props.navigation.navigate("login")} style={{ marginTop: 20 }}>
          <Text style={{ color: "white", fontSize: 20, textAlign: "center" }}>LOGIN WITH MY ACCOUNT</Text>
        </Forget>
      </Container>
    );
  }
}