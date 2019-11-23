import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  return (
    <Modal visible={props.visible} animationType='slide'>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter a Course Goal!"
            style={styles.input}
            onChangeText={goalInputHandler}
            value={enteredGoal}
          />
          <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
        </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
 //este estilo que sigue afecta a View, y View se comporta como un div, osea solo
 //crece el tamaño de los hijos que contiene. Por tanto, a pesar que el Modal que wrappea al View si
 //abarca toda la pantalla, tenemos que hacer que el View que está dentro tambien abarque toda la pantalla
 //y luego sus hijos se centraran con justifyContent y alignItems
  inputContainer: {//recordar que el flex-direction de RN siempre es column!!
    flex: 1, //con flex 1 , se hace que el View abarque todo el espacio 
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: "80%",
    borderColor: "blue",
    borderWidth: 1,
    padding: 10,
    marginTop: 10
  }
});

export default GoalInput;
