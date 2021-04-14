//import liraries
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AuthRoute, VerifiedRoute} from './routes/route';
// use switch case. If user LoggedIn then show verifiedRoutes else show Authroute
// create a component
const App = () => {

  let loggedIn = false    //use redux to set this

  return (
		<NavigationContainer>
      {loggedIn ? <VerifiedRoute /> : <AuthRoute />}
		</NavigationContainer>
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
export default App;
