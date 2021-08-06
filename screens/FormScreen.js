import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View ,SafeAreaView,Platform,Status,Alert, TouchableOpacity} from 'react-native';
import { Header } from 'react-native-elements';
import DietScreen from './DietScreen';
import HomeScreen from './HomeScreen';
import firebase from "firebase";

export default class FormScreen  extends Component{
  constructor(props){
    super(props)
this.state={
  Weight:"",
  Bp:"",
  Sugar:"",
  Height:""
}

  }

  

  async addStory() {
    if (
      this.state.Weight &&
      this.state.Height &&
      this.state.Sugar &&
      this.state.Bp
    ) {
      let storyData = {
      
        Weight: this.state.tWeight,
        Height: this.state.Height,
        Sugar: this.state.Sugar,
       Bp: this.state.Bp,
        user: firebase.auth().currentUser.displayName,
        created_on: new Date(),
        author_useruid: firebase.auth().currentUser.uid,
     
      };
      await firebase
        .database()
        .ref(
          "/users/" 
        )
        .set(storyData)
        .then(function(snapshot) {});
      this.props.setUpdateToTrue();
      this.props.navigation.navigate("Home");
    } else {
      Alert.alert(
        "Error",
        "All fields are required!",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
    }
  }

 

    render(){
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.droidSafeArea}/>
   
   <Header
          backgroundColor={'cyan'}
          centerComponent={{
            text: 'Diet And Nutrition App',
            style: {
              color: 'black',
              fontSize: 20,
            
              fontWeight: 'bold',
            },
          }}
        />
        <Text>Fill The Form</Text>
      <TextInput
      onChangeText={(Weight)=>this.setState({Weight})}
      placeholder={"Enter Weight "}
      placeholderTextColor="blue"
      style={styles.inputStyle}
     />

<TextInput
      onChangeText={(Height)=>this.setState({Height})}
      placeholder={"Enter Height "}
      placeholderTextColor="blue"
      style={styles.inputStyle}
     />

<TextInput
      onChangeText={(Bp)=>this.setState({Bp})}
      placeholder={"Enter BP Score"}
      placeholderTextColor="blue"
      style={styles.inputStyle}
      />

<TextInput
      onChangeText={(Sugar)=>this.setState({Sugar})}
      placeholder={"Enter Sugar Score"}
      placeholderTextColor="blue"
      style={styles.inputStyle}
      />

      <TouchableOpacity   onPress={() => this.addStory()}>
         <Text>Submit</Text>
         </TouchableOpacity>
     
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
     
    backgroundColor: '#fff',
    
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight :25,
  },
  inputStyle:{
    borderWidth:2,
    borderColor:"red",
    borderRadius:50,
    color:"#15eac3",
    fontSize:18,
    paddingLeft:10,
    marginTop:50,
  }
});
