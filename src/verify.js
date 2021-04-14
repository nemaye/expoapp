//import liraries
import React, { Component } from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Touchable, TouchableOpacity } from 'react-native';

// create a component
const Verify = ({route, navigation}) => {
    
    const [otp, setOtp] = useState('')
    const {phoneNumber} = route.params
    
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="OTP"
                keyboardType="numeric"
                onChangeText={(number) => setOtp(number)}
            />
            <TouchableOpacity onPress={() => {
                fetch('http://77c8832ac5a3.ngrok.io/verify', {
                method: 'post',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phoneNumber: phoneNumber,
                    otp: otp
                })
                })
                .then((res) => res.json())
                .then(json => {
                console.log(json)
                })
                .catch((err) => console.log('err',err))
            }}>
                <Text>submit</Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Verify;
