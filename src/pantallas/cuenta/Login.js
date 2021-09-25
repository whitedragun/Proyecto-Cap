import React,{useRef} from 'react'
/*
Usamos use Ref para poner una referencia de datos en este componente, sirve para
acceder a las propiedades de nuestro componente y pasarlas a otro mediante una varibale
*/


import { View, Text, StyleSheet, Image,StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import LoginForm from '../../componentes/LoginForm'
import Toast from 'react-native-easy-toast'




export default function Login() {

    const toastRef= useRef();



    return (
        <View style={styles.container}>

            <StatusBar/>
            <Image source={require('../../../assets/logotrue.png')} style={styles.imgLogo} />
            <Text style={styles.textobanner}>Bienvenido</Text>
            <LoginForm toastRef={toastRef}/>
            <Toast ref={toastRef}position="center"opacity={0.9}/>

        </View>
    )
}


const styles=StyleSheet.create({

    container:{
        
        flex:1,
        backgroundColor:"#128c7e",

    },

    imgLogo:{

        width:206,
        height:206,
        marginTop:200,//modificado por mi
        alignSelf:"center",
        padding:50,
        marginBottom:10, //modificado por mi
        
    },

    textobanner:{

        fontFamily:"Roboto",
        fontWeight:"bold",
        fontSize:50,
        color:"#fff",
        alignSelf:"center"

    }

})