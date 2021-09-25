import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack'

import ConfirmarNumero from '../pantallas/cuenta/ConfirmarNumero'
import EnviarConfirmacion from '../pantallas/cuenta/EnviarConfirmacion'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'


const Stack = createStackNavigator();


export default function Cuenta() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen component = {EnviarConfirmacion} name="enviar-confirmacion" 
                options ={{title:"Confirma tu numero de tel", headerStyle:{backgroundColor:"#127c7e"},headTintColor:"#fff" }} />
                <Stack.Screen component = {ConfirmarNumero} name = "confirmar-numero"
                options = {{title: "Confirma tu numero", headerStyle: {backgroundColor:"#127c7e"}, headerTintColor: "#fff"}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})
