import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { StyleSheet, Text, View } from 'react-native'
import Tienda from '../pantallas/tienda/Tienda'
import AddProduct from '../pantallas/tienda/AddProduct'
import Contacto from '../pantallas/tienda/Contacto'
import MensajesList from '../pantallas/tienda/MensajesList'
import Detalle from '../pantallas/tienda/Detalle'

//
const Stack= createStackNavigator();

export default function TiendaStack() {
    return (
        <Stack.Navigator>

            <Stack.Screen component={Tienda} name="tienda" options={{headerShown:false}} />
            <Stack.Screen component={AddProduct} name="add-product" 
            option={{title:"Agregar Producto", headerStyle:{backgroundColor:"#127c7e"}, headerTintColor:"#fff" }} />
            <Stack.Screen component={Contacto} name="contacto" 
            option={{title:"contacto", headerStyle:{backgroundColor:"#127c7e"}, headerTintColor:"#fff" }} />
            <Stack.Screen component={MensajesList} name="mensaje" 
            option={{title:"mensaje", headerStyle:{backgroundColor:"#127c7e"}, headerTintColor:"#fff" }} />
            <Stack.Screen component={Detalle} name="detalle" 
            option={{headerTransparent:true, headerTintColor:'#127c7e', title:"Detalle"}}/>


        </Stack.Navigator>
            
        
    )
}

const styles = StyleSheet.create({

})

