import React from "react";
import {View,Text,StyleSheet} from "react-native";

export default class Application extends React.Component{
  constructor(props){
    super();
  }
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>Hello World!</Text>
      </View>
    );
  }
}

const styles =StyleSheet.create({
  container:{
  flux: 1,
  justifyContent: 'center',
  alignItems: 'center'
  },
  text: {
    fontSize: 70,
    fontWeight: 'bold',
    color:'red',
    paddingTop: 250
  }
  
  
});

