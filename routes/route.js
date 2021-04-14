//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Login from '../src/login'
import Verify from '../src/verify';
import DashBoard from '../src/DashBoard';
import Chat from '../src/Chat';
import Profile from '../src/Profile';

const Stack = createStackNavigator()
const BottomTab = createBottomTabNavigator()

// create a component
export const AuthRoute = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Login}/>
            <Stack.Screen name="Verify" component={Verify}/>
        </Stack.Navigator>
    );
};

export const VerifiedRoute = () => {
    return (
        <BottomTab.Navigator initialRouteName="DashBoard">
            <BottomTab.Screen name="Chat" component={Chat}/>
            <BottomTab.Screen name="DashBoard" component={DashBoard}/>
            <BottomTab.Screen name="Profile" component={Profile}/>
        </BottomTab.Navigator>
    )
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});
