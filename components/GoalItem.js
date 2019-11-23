import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const GoalItem = props => {

    //el componente View tiene varios listeners disponibles como onPress,onPressStart ,onLongPress , etc , etc
    //con estos podemos jugar para definir por ejemplo cuanto tiempo duró el touch del usuario , etc
    //Pero mas facil es usar unos hoc que nos ofrece RN, todos derivan del componente Touchable
    //hay muuchos tipos de touchable para distintos efectos y objetivos y todos son configurables
    //se puede configurar por ejemplo el efecto que produce el componente al ser presionado, etc
    //tienen tambien varios listeners disponibles para varios eventos
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItem}>
                {/* itemData representa como ha guardado FlatList nuestra data
                para acceder a mi objeto guardado en cada miembro de la lista tengo 
                que usar "item", despues recien accedo a los atributos que YO haya definido */}
                <Text >{props.title}</Text>
          </View>
        </TouchableOpacity>
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