import React from 'react';
import { StyleSheet, Text, View, TextInput,Button, FlatList, ActivityIndicator, TouchableOpacity, Image, KeyboardAvoidingView,AsyncStorage } from 'react-native';
console.disableYellowBox = true;

import Main from './main.js'
import Register from './register.js'

const ACCESS_TOKEN = 'access_token';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      username: "",
      senha: "",
      error: ""
    }
  } // Note that there is no comma after the method completion

  render() {
    return (

<KeyboardAvoidingView style={styles.container} behavior="padding" enabled>


      <View style={styles.container}>

        <Image
          source={require('../my-icon.png')}
          style={{resizeMode: 'contain',width:220}}
        />

        <View>
          <TextInput
            style={styles.input}
            ref={(el) => { this.username = el; }}
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
            placeholder="Digite seu Login"
          />

          <TextInput
            style={styles.input}
            secureTextEntry={true}
            ref={(el) => { this.senha = el; }}
            onChangeText={(senha) => this.setState({senha})}
            value={this.state.senha}
            placeholder="Digite sua Senha"
          />

          <Text style={styles.error}>
            {this.state.error}
          </Text>

          <Button
            onPress={this.login.bind(this)}
            title="Login"
            color="#7920FF"
          />

        </View>

        <Text style={styles.link} onPress={() => this.props.navigation.navigate('Register')}>
          Criar conta
        </Text>

      </View>
</KeyboardAvoidingView>
    );
  }


  login() {

    var data = {
      "username": this.state.username,
      "senha": this.state.senha,
    }

    this.username.clear();
    this.senha.clear();

    fetch("http://192.168.41.220:3000/login", {
       method: "POST",
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       },
       body:  JSON.stringify(data)
    })
    .then((response)=> response.json())
    .then((res) =>{

      if (res.sucess == true){
        console.log(res.sucess);
        console.log(res.token);
        this.props.navigation.navigate('Main');
      }else{
        this.setState({error: res.message});
      }
    });

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
  input:{
    height: 40,
    width: 300,
    color:'#7920FF',
    marginBottom:20
  },
  link:{
    color:"#7920FF",
    marginTop:20
  },
  error:{
    color:"#d60c0c",
  },
});