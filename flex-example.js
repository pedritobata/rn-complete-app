import React from 'react';
import {Text, View} from 'react-native';

class FlexExample extends React.Component{

  render(){
      return (
          /* no se pone display:flex porque RN es flex por default */
          <View style={{
              padding: 50,
              width: "80%",
              height: 300,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center" /* esta propiedad es stretch por default, en cuyo caso los componentes
                afectados se alrgarian verticalmente hasta los 300 del height definido */
          }}>
              <View style={{
                  backgroundColor: 'red',
                  /* la propiedad flex es la que comanda el espacio en el main axis */  
                  flex:1,                  

                  justifyContent: 'center',
                  alignItems: 'center'
              }}>
                  
                  <Text>1</Text>
              </View>
              <View style={{
                  backgroundColor: 'blue',
                  flex:3,
                  alignItems: 'center',
                  justifyContent: 'center'  
              }}>
                  <Text>2</Text>
              </View>
              <View style={{
                  backgroundColor: 'green',

                  alignItems: 'center',
                  justifyContent: 'center'
              }}>
                  <Text>3</Text>
              </View>
          </View>
      );
  }

}

export default FlexExample;