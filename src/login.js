//import liraries
import React, { Component } from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Touchable, TouchableOpacity, Image, Input, TextInput } from 'react-native';
import styled from 'styled-components'

const Container = styled.View`
  position: relative;
  width: 100%;
  height: 896px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
`
const Title = styled.Text`
  position: relative;
  margin: 35px 100px 0px 100px;
  font-family: 'Rosario';
  font-style: normal;
  font-weight: bold;
  font-size: 23px;
  line-height: 28px;
  color: #575555;
`
// const BackArrow = styled.span`
//   position: relative;
//   margin: 5px 354px 10px 28px;
//   color: #484a48;
//   font-size: 24px;
// `
// const ImageField = styled.Image`
//   position: relative;
//   margin: 10px 5px 8px 5px;
// `
const WelcomeText = styled.Text`
  position: relative;
  margin: 8px 0px 7px 0px;
  font-family: Rosario;
  font-style: normal;
  font-weight: bold;
  font-size: 29px;
  line-height: 35px;
  color: #484a48;
`
const DescriptionText = styled.View`
  position: relative;
  width: 314px;
  height: 50px;
  margin: 8px 0px 25px 0px;
  font-family: Rosario;
  font-style: normal;
  font-weight: bold;
  font-size: 21px;
  line-height: 25px;
  text-align: center;
  color: #828282;
`
const Paragraph = styled.Text`
  position: relative;
  margin: 5px;
`
const FormContainer = styled.View`
  box-sizing: border-box;
  position: relative;
  margin: 35px 36px 10px 36px;
  width: 342px;
  height: 195px;
  box-shadow: 0px 0px 7px 4px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px 10px 20px;
`
// const SubmitButton = styled.Inp`
//   position: relative;
//   margin: 40px 119px 0 79px;
//   width: 144px;
//   height: 38px;
//   background: #a8c668;
//   border: 0;
//   border-radius: 13px;
//   font-family: Rosario;
//   font-style: normal;
//   font-weight: 600;
//   font-size: 17px;
//   line-height: 21px;
//   /* identical to box height */
//   color: #ffffff;
//   align-self: center;
// `


// create a component
const Login = ({navigation}) => {

    const [phoneNumber, setPhoneNumber] = useState('')

    return (
      <Container>
      <Title>AGRIGATOR</Title>
      {/* <Image src={loginImage} alt='otp-verification'></Image> */}
      <WelcomeText>Login with Mobile Number</WelcomeText>
      <DescriptionText>
        <Paragraph>
          Enter your mobile number we will send you an OTP to verify
        </Paragraph>
      </DescriptionText>
       {/* <FormContainer onSubmit={() => console.log('hi')}>
         <PhoneInput country='India' value={contact} onChange={setContact} />
         <SubmitButton>Continue</SubmitButton>
       </FormContainer> */}

        <TextInput 
            placeholder="phoneNumber" 
            keyboardType="numeric" 
            onChangeText={(number) => setPhoneNumber(number)} 
        />
        <TouchableOpacity onPress={() => {
          fetch('http://77c8832ac5a3.ngrok.io', {
            method: 'post',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              phoneNumber: phoneNumber
            })
          })
          .then((res) => res.json())
          .then(json => {
            console.log(json)
            navigation.navigate("Verify", json)
          })
          .catch((err) => console.log('err',err))
        }}>
            <Text>Send OTP</Text>
        </TouchableOpacity>
     </Container>
    );
};

//make this component available to the app
export default Login;
