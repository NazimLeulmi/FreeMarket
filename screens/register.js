import React, { Component } from 'react';
import { Text } from "react-native";
import {
  Container, LogoText, Inp,
  Input, InpIcon, Avoid, Btn, Forget, colors, Logo
}
  from "./login";
import styled from "styled-components/native";
import axios from 'axios';

const Error = styled.Text`
  color:rgba(255,255,255,.85);
  font-size:13;
  width:80%;
  text-align:left;
  padding-left:10px;
`;

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default class Register extends Component {
  state = {
    email: "",
    password: "",
    passwordc: "",
    errors: { email: "", password: "", passwordc: "" }
  }
  // Form Inputs Client Side Validation
  validate = () => {
    let errors = { email: "", password: "", passwordc: "" }
    if (validateEmail(this.state.email) === false) {
      errors.email = "the email is invalid";
    }
    if (this.state.password.length < 8) {
      errors.password = "the password has to be at least 8 characters"
    }
    if (this.state.password !== this.state.passwordc) {
      errors.passwordc = "the two passwords must match";
    }
    if (errors.email + errors.password + errors.passwordc !== "") {
      this.setState({ errors: errors });
      // console.log(errors);
      return false;
    }
    return true;
  }
  submit = () => {
    // if (this.validate() === false) {
    // console.log("Inputs are Invalid");
    // } else {
    console.log("Valid Inputs");
    axios.get("https://192.168.0.10:3333")
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  // }
  render() {
    return (
      <Container style={{ paddingBottom: 25 }}>
        <LogoText>FreeMarket</LogoText>
        <Logo source={require("../assets/pics/bag.png")} />
        <Avoid >
          <Inp style={{ marginTop: 50 }}>
            <Input placeholder="EMAIL" type="email"
              autoCapitalize="none"
              autoCorrect={false}
              autoCompleteType="off"
              placeholderTextColor="white"
              selectionColor={"red"}
              value={this.state.email}
              onChangeText={(email) => this.setState({ email })}
            />
            <InpIcon name="mail" color={colors.comet} />
          </Inp>
          {this.state.errors.email ? <Error>{this.state.errors.email}</Error> : null}
          <Inp>
            <Input placeholder="PASSWORD" type="password"
              autoCapitalize="none"
              autoCorrect={false}
              autoCompleteType="off"
              placeholderTextColor="white"
              selectionColor={"red"}
              secureTextEntry={true}
              value={this.state.password}
              onChangeText={(password) => this.setState({ password })}
            />
            <InpIcon name="lock" color={colors.comet} />
          </Inp>
          {this.state.errors.password ? <Error>{this.state.errors.password}</Error> : null}
          <Inp>
            <Input placeholder="PASSWORD CONFIRMATION" type="password"
              autoCapitalize="none"
              autoCorrect={false}
              autoCompleteType="off"
              placeholderTextColor="white"
              selectionColor={"red"}
              secureTextEntry={true}
              value={this.state.passwordc}
              onChangeText={(passwordc) => this.setState({ passwordc })}
            />
            <InpIcon name="lock" color={colors.comet} />
          </Inp>
          {this.state.errors.passwordc ? <Error>{this.state.errors.passwordc}</Error> : null}
          <Btn onPress={this.submit}>
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