import React, { Component } from 'react';
import { Text, TextInput } from "react-native";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Feather';

export const colors = {
  calypso: "rgb(61, 115, 139)",
  comet: "rgb(85, 96, 128)"
}

export const Container = styled.View`
  background-color:${colors.calypso};
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:flex-end;
  width:100%;
  height:100%;
  padding-bottom:20px;
`;
export const LogoText = styled.Text`
  color:rgba(255,255,255,.75);
  font-size:45;
  font-family:Billabong;
  align-self:stretch;
  text-align:center;
`;
const Slogon = styled(LogoText)`
  font-family:Roboto;
  font-size:22;
  width:75%;
  margin-bottom:15px;
  align-self:center;
`;
export const Logo = styled.Image`
  width:150;
  height:150;
  margin-bottom:20;
`;
export const Inp = styled.View`
  width:80%;
  height:50;
  background:rgba(255,255,255,.25);
  margin:5px;
  border-radius:25;
  display:flex;
  flex-direction:row;
  align-items:center;
`;

export const Input = styled.TextInput`
  color:white;
  flex:1;
  padding-right:15px;
  padding-left:15px;
  font-size:16;
`;

export const InpIcon = styled(Icon)`
  position:absolute;
  right:15;
  font-size:25;
`;

export const Btn = styled.TouchableOpacity`
  width:80%;
  height:50;
  background:rgba(85, 96, 128,.75);
  margin:5px;
  border-radius:25;
  display:flex;
  align-items:center;
  justify-content:center;
`;

export const Avoid = styled.KeyboardAvoidingView`
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  margin-bottom:10px;
`;

export const Forget = styled.TouchableOpacity`
  height:30px;
  width:80%;
`;

export const ForgetTxt = styled.Text`
  text-align:right;
  font-size:14;
  color:rgba(255,255,255,.85);
  text-decoration:underline;
`


export default class Login extends Component {
  render() {
    return (
      <Container>
        <LogoText>FreeMarket</LogoText>
        <Slogon>Buy and sell products completely free as in freedom and free of any charges</Slogon>
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
          <Btn onPress={() => this.props.navigation.navigate("register")}>
            <Text style={{ color: "white", fontSize: 20 }}>LOGIN</Text>
          </Btn>
          <Forget><ForgetTxt>RESET PASSWORD</ForgetTxt></Forget>
        </Avoid>
        <Forget onPress={() => this.props.navigation.navigate("register")}>
          <Text style={{ color: "white", fontSize: 20, textAlign: "center" }}>CREATE A NEW ACCOUNT</Text>
        </Forget>
      </Container>
    );
  }
}
