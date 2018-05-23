import React from 'react';
import { StyleSheet, Text, View, TextInput,Button, FlatList, ActivityIndicator, TouchableOpacity} from 'react-native';
import {StackNavigator} from 'react-navigation';
console.disableYellowBox = true;

import {SignedOut} from './router/signedOut.js';
// import Login from './pages/login.js';
// import Register from './pages/register.js';
// import Main from './pages/main.js';

// const Application = StackNavigator(
//   {
//     Home: {screen: Login},Register: {screen:Register},Main: {screen:Main}
//     },{
//       navigationOptions:{
//         header: false
//       }
//   }
// );

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  render() {

    return (
      <SignedOut/>

    );

  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});