import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function Detalhes(){

    const route = useRoute();

    const data = route.params?.data;


    return(
        <View style={styles.container}>
            <Image
            style={{width: '100%', height:350}}
            source={{uri: data.image}}
            />
            <Text style={styles.titulo}>{data.titulo}</Text>
            <Text style={styles.duracao}>{data.duracao}</Text>
            <Text style={styles.duracao}>{data.categoria}</Text>
            <Text style={styles.sinopse}>{data.sinopse}</Text>
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.textoBotap}>
                    Play
                </Text>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFF'
    },
    titulo:{
        fontSize: 25,
        color: 'black',
        marginLeft: 20,
        fontWeight: 'bold'
    },
    duracao:{
        fontSize: 18,
        color: 'black',
        marginLeft: 20,
    },
    sinopse:{
        fontSize: 16,
        marginLeft:12,
        marginRight: 12,
        textAlign: 'justify',
        color: 'black'
    },
    botao:{
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'black',
        marginRight:100,
        marginLeft: 100,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#FFF',
       
    },
    textoBotap:{
        fontSize: 20,
        color: 'black'
    }
})