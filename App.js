import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button , FlatList} from 'react-native';
import GoalItem from './components/GoalItem';

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);

  };

  const addGoalHandler = () => {
    
    setCourseGoals(currentGoals => [...currentGoals, { uid: Math.random().toString(), value: enteredGoal }]);
  };


  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter a Course Goal!"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler}/>
      </View>

     {/*  FlatList utiliza props para que le pasemos todo lo que necesita
      trabaja con arrays pero de Objetos, donde podemos poner las propiedades que
      queramos entre ellas (Ver arriba addGoalHandler()) debe haber una que funcione como key para el render de la lista
      si llamamos a esta propiedad "key" o "id" , por defecto FlatList interpreta que esa propiedad
      es en efecto el key. Si no usamos esos nombres tenemos que definirle como obtener el key en
      la prop keyExtractor */}
      <FlatList
        keyExtractor={(item,index) => item.uid }
        data={courseGoals}
        renderItem={itemData => 
           <GoalItem  title={itemData.item.value} />
        }
      >

      </FlatList>


    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 50 },
  inputContainer: { 
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' 
  },
  input: { 
    width: '80%', borderColor: 'blue', borderWidth: 1, padding: 10 
  },
  
});
