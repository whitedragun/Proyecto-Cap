import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MiTienda from '../pantallas/miTienda/MiTienda'
import EditarProductos from '../pantallas/miTienda/EditarProductos'
import { createStackNavigator } from '@react-navigation/stack'


const Stack = createStackNavigator();

export default function MiTiendaStack() {
    return (
        <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:"#127c7e"}, headerTintColor:"#fff"}}>
            <Stack.Screen component={MiTienda} name="mitienda" options={{title:"Mi tienda" }} />
            <Stack.Screen component={EditarProductos} name="edit-product" options={{title: "Editar Producto"}} />

        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})
