import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View ,Button} from 'react-native';

import { Header } from 'react-native-elements';
import FormScreen from './FormScreen';


export default class MainScreen extends Component{
render(){
    return(
        <View>
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
<TouchableOpacity  style={styles.buttonText} 
onPress={()=>this.props.navigation.navigate("FormScreen")} 
>
<Text>LETS START</Text>
</TouchableOpacity>
</View>
)

}


}

const styles=StyleSheet.create({
    buttonText:{
        borderWidth:2,
        borderColor:"red",
        borderRadius:50,
        fontSize:18,
        paddingLeft:30,
        marginTop:50,
        width:100,
        height:80,
        alignItems:"center",
    justifyContent:"center",
    marginLeft:20
    }
})
