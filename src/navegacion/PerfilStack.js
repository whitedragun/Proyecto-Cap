import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Perfil from '../pantallas/perfil/Perfil'



const Stack= createStackNavigator();
export default function PerfilStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen component ={Perfil} name="perfil"options={{headerShown:false}}/>
        </Stack.Navigator>

    )
}

const styles = StyleSheet.create({})
