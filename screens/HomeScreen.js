import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View ,SafeAreaView,Platform,Status, TouchableOpacity} from 'react-native';

import DietScreen from './DietScreen';
import { RFValue } from 'react-native-responsive-fontsize';

export default class HomeScreen  extends Component{
  constructor(props){
    super(props)

  }
    render(){
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.droidSafeArea}/>
       <Text>Choose One Options</Text>
     <Text>{this.props.navigation.getParam('Bmi')}</Text>
     <TouchableOpacity
     style={styles.inputStyle}
     onPress={()=>this.props.navigation.navigate("DietScreen")}
     >
       <Text
       style={styles.TextInput}>
         Lose Weight
       </Text>
     </TouchableOpacity>

     <TouchableOpacity
     style={styles.inputStyle}
     onPress={()=>this.props.navigation.navigate("DietScreen")}
     >
       <Text
       style={styles.TextInput}>
        Gain Weight
       </Text>
     </TouchableOpacity>
      
     <TouchableOpacity
     style={styles.inputStyle}
     onPress={()=>this.props.navigation.navigate("DietScreen")}
     >
       <Text
       style={styles.TextInput}>
         Heart Patient
       </Text>
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
      Platform.OS === 'android' ? StatusBar.currentHeight :RFValue(25),
  },
  inputStyle:{
    borderWidth:2,
    borderColor:"red",
    borderRadius:50,
    color:"#15eac3",
    fontSize:18,
    paddingLeft:30,
    marginTop:50,
    width:100,
    height:80,
    alignItems:"center",
justifyContent:"center",
marginLeft:20
  },
  TextInput:{
alignItems:"center",
justifyContent:"center",
fontSize:18,
color:"blue"
  }
});
