import React  from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useState, useEffect } from 'react'
import Loading from '../componentes/Loading'
import RutasAutenticadas from './RutasAutenticadas'
import CuentaStack from './Cuenta'
import {validarPhone} from '../utils/Acciones'





export default function SwitchNavigator() {

    const [phoneauth, setphoneauth] = useState(false)
    const [loading, setloading] = useState(true)

    useEffect(() => {
        
        validarPhone(setphoneauth)

        setTimeout(() => {

            setloading(false)
            
        }, 5000); // 1000 es un segundo ... 2000 es 2 segundos

    }, [])

    if (loading){
        return <Loading isVisible ={loading} text="Cargndo config"/>
    } else {
        return phoneauth ? <RutasAutenticadas/> : <CuentaStack/>
    }

   
}


