// va a tener login, registro, cambio de contraseña
// aqui creamos la navegación principal y esta envuelve la navegación cuando un usuario no está registrado

import React from 'react'
import { View, Text } from 'react-native'

//usamos react navigation para navegar entre pantallas
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'

import Login from '../pantallas/cuenta/Login'
import Registrar from '../pantallas/cuenta/Registrar'
import RestaurarPasword from '../pantallas/cuenta/RestaurarPasword'

//Inicializamos nuestra variable 
const Stack= createStackNavigator();

export default function RutasNoAutenticadas() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="login" screenOptions ={{headerShown:false}}>

                <Stack.Screen component = {Login} name="login"/>
                <Stack.Screen component = {Registrar} name="register"/>
                <Stack.Screen component = {RestaurarPasword} name="lostpassword"/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}
