import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button , ScrollView} from 'react-native';
import FlexExample from './flex-example';

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);

  };

  const addGoalHandler = () => {
    //console.log(enteredGoal);
    //recordar que los tipos setState pueden recibir  (prevState, props)
    setCourseGoals(currentGoals => [...currentGoals,enteredGoal]);
  };


  return (
    /* RN usa Flexbox por default!!. Ademas la orientacion del flex es column por default */
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        {/* En RN ningun texto puede ir fuera de un componente de texto */}
        <TextInput
          placeholder="Enter a Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler}/>
      </View>

      {/* si quiero que el scroll esté disponible tengo que usar un ScrollView, el cual
      tiene muchas propiedades. El problema es que ScrollView siempre renderiza tooodos los items
      aun asi no se vean en pantalla, lo cual lo hace ineficiente!!
      Para solucionar eso se usa FlatList (Ver el ejemplo en App.js) */}
      <ScrollView>{courseGoals.map((goal,index) => 
              /* tengo que envolver a Text dentro de un View ya que Text no acepta casi ningun style */
               <View key={index} style={styles.listItem}>
                 <Text >{goal}</Text>
               </View>
               )}
      </ScrollView>

      <FlexExample ></FlexExample>

    </View>
  );
}

//tambien se puede crear un style con un objeto directo normal como en React.js
//pero usando StyleSheet se gana en rendimiento y además me valida si los parametros
//que estoy definiendo estan correctamente nombrados antes de deployar y que se caiga todo!!
const styles = StyleSheet.create({
  screen: { padding: 50 },
  inputContainer: { 
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' 
  },
  input: { 
    width: '80%', borderColor: 'blue', borderWidth: 1, padding: 10 
  },
  listItem: {
    padding: 10,
    marginVertical: 10,/** esta propiedad no existe en css */
    backgroundColor: '#ccc',
    borderWidth: 1,
    borderColor: 'black'
  }
});
