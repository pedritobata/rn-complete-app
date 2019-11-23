import React, { useState } from 'react';
import { StyleSheet, View , FlatList, Button} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);


  const addGoalHandler = (goalTitle) => {
    setCourseGoals(currentGoals => [...currentGoals, { uid: Math.random().toString(), value: goalTitle }]);
  };

  const deleteGoalHandler = id => {
    setCourseGoals(courseGoals.filter(goal=> goal.uid !== id));
  }


  return (
    <View style={styles.screen}>
      
    <Button title="Add New Goal" onPress={()=>setIsAddMode(true)}/>
    <GoalInput visible={isAddMode} onAddGoal={addGoalHandler}/>

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
           <GoalItem  title={itemData.item.value} onDelete={deleteGoalHandler} id={itemData.item.uid}/>
        }
      >

      </FlatList>


    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 50 },
});
