import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const GoalItem = props => {

    return (
        <View style={styles.listItem}>
            {/* itemData representa como ha guardado FlatList nuestra data
            para acceder a mi objeto guardado en cada miembro de la lista tengo 
            que usar "item", despues recien accedo a los atributos que YO haya definido */}
            <Text >{props.title}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderWidth: 1,
        borderColor: 'black'
      }
})

export default GoalItem;