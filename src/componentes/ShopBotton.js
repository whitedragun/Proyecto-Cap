import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
//TouchableHighLight es como un boton que cambia de un color a otro
import {Icon} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
//para que se diroja a la panatlla de tienda cuando el uusairo oprima el boton

export default function ShopBotton() {

    const navigation = useNavigation();
//el nombre del navigate igual al stack de rutas autenticadas
    return (
       <TouchableHighlight style={styles.container}
       onPress={()=> { navigation.navigate("mitienda")}}
       > 
           <Icon name="store" color="#fff" size={30}/>
       </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
 container:{

     backgroundColor:"#25d366",
     alignItems:"center",
     justifyContent:"center",
     width: 72,
     height:72,
     borderRadius: 36, // bordes redondos
     top:-20, //para que suba
     shadowRadius:5, // sombra a radios
     shadowOffset:{height:10},//
     shadowOpacity:0.3,// da opacidad
    borderWidth: 3,//grosor del borde
    borderColor:"#fff",//color del borde
    padding:20 //da mas espacio para que el usario orpima el boton

 }

})