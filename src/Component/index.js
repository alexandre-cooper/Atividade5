import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FlatComponent = ({data}) => {

    const navigation = useNavigation();
    function navegar(){
        navigation.navigate('Detalhes', {data:data});
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.container} onPress={navegar}>
            <Image source={{uri: data.image}} style={{width:300, height: 400, resizeMode: 'cover', borderRadius: 16, margin: 20}}/>
            <View>
            <Text style={styles.titulo}>{data.titulo}</Text>
            <Text style={styles.duracao}>{data.duracao}</Text>
            <Text style={styles.categoria}>{data.categoria}</Text>
            </View>
        </TouchableOpacity>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'black',
        marginBottom: 8,
        
    },
    titulo:{
        fontSize: 20,
        color: 'black',
        marginLeft: 10,
        color: '#fff'
    },
    duracao:{
        fontSize:16,
        fontWeight: 'bold',
        marginLeft: 15,
        color: '#fff'
    },
    categoria:{
        marginLeft: 15,
        fontSize: 12,
        color: '#fff'
    }
})

export default FlatComponent;