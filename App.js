import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
     /* RN usa Flexbox por default!!. Ademas la orientacion del flex es column por default */
    <View style={{padding: 50}}>
      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
        {/* En RN ningun texto puede ir fuera de un componente de texto */}
        <TextInput 
           placeholder="Course Goal"
           style={{width:'80%' ,borderColor:'blue', borderWidth:1, padding:10}}
        />
        <Button title="ADD" />
      </View>
      <View>
  
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
