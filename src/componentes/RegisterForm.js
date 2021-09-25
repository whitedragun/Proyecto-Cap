import React, {useState} from 'react'
import { StyleSheet, Text, View,} from 'react-native'
import {Icon, Input, Button,} from 'react-native-elements'
import {useNavigation} from '@react-navigation/native'
import { validateEmail } from '../utils/ValidarEmail' 
//Es una clase que dice yo recibo algo, si recibo algo es falso, si no recibo algo es verdadero, pq tiene que ser empty; si está vacio saca un boolean
import {isEmpty,size} from 'lodash'//lodash es una libreria que trabaja con scripts son funciones java scripts

import { validarSesion } from '../utils/Acciones'
import * as firebase from 'firebase'
import Loading from './Loading'

export default function RegisterForm(props){// el props sirve para usar las refenrencias ? 

    const{toastRef}= props;

    //useState es como un get y set al mismo tiempo
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [repetirpasword, setrepetirpasword] = useState("");

    const navigation=useNavigation();
    const [show, setshow] = useState(false);
    const [loading, setloading] = useState(false);

    validarSesion();


    const crearcuenta = () => {

        if(!validateEmail(email)){

            toastRef.current.show("ingresa correo valido");

        }else if(isEmpty(email) || isEmpty(password)){

            toastRef.current.show("Todos los campos son obligatorios");
            
        } else if (password !== repetirpasword){
            toastRef.current.show("los paswords deben ser iguales");
        } else if (size(password) < 6){
            toastRef.current.show("La contraseña debe de ser de minimo 6 caracteres ");
        }else{
            setloading(true);

            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then((response)  => {
                    toastRef.current.show("Bienvenido")
                    setloading(false)
                } )
                .catch((err) => {
                    setloading(false)
                    toastRef.current.show("Ha ocurrido un error, intentelo más tarde")
                    console.log(err)

                } )
        }

    }


    return (
        <View style = {styles.container}>
            <View style = {{borderBottomColor:"#25d366", borderBottomWidth:2, width:200}}/>
            <Input placeholder="Correo"  containerStyle={styles.input} 
            rightIcon={{
                type:"font-awesome-5",
                name:"eye",
                color:"#127c7e",
                size: 30,
                onPress: () => alert("Hola me presionaste")
            }}
            
            leftIcon={{
                type:"font-awesome-5",
                name:"user-graduate",
                color:"#127c7e",
                size: 40
            }}
            
            onChangeText={(text) => {
                setemail(text)
            }}

            value={email}
            
            />

            <Input placeholder="Contraseña" containerStyle={styles.input} 
            rightIcon={{
                type:"font-awesome-5",
                name: show ? "eye" : "user-graduate",
                color:"#127c7e",
                size: 30,
                onPress: () => setshow(!show)
            }}
            
            leftIcon={{
                type:"font-awesome-5",
                name:"user-shield",
                color:"#127c7e",
                size: 40
            }}
            
            onChangeText={(text) => {
                setpassword(text)
            }}

            secureTextEntry={!show}

            value={password}

            />

            <Input placeholder="Repite Contraseña" containerStyle={styles.input} 
            rightIcon={{
                type:"font-awesome-5",
                name: show ? "eye" : "user-graduate",
                color:"#127c7e",
                size: 30,
                onPress: () => setshow(!show)
            }}
            
            leftIcon={{
                type:"font-awesome-5",
                name:"user-shield",
                color:"#127c7e",
                size: 40
            }}
            
            onChangeText={(text) => {
                setrepetirpasword(text)
            }}

            secureTextEntry={!show}

            value={repetirpasword}

            />

            <Button title="Crear cuenta" containerStyle={styles.btnEntrar} buttonStyle={{backgroundColor:"#128c7e"}} titleStyle={{fontSize:25}}
                onPress={() => {crearcuenta() } }
            />

            <Button

               title="iniciar sesion"
               containerStyle={styles.btnEntrar}
               buttonStyle={{backgroundColor:"#128c7e"}}  
               onPress={() => navigation.goBack()}   
            
            />

            <Loading isVisible ={loading} text="Cargando configuración" />
          
        </View>
    )
}

const styles = StyleSheet.create({
    container:
    {
        backgroundColor:"#fff",
        flex:1, //Para cubrir toda la pantalla
        marginTop:100, //Da un espacio entre el formulario y el mesaje de bienvenida (modificado por mi)
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        alignItems:"center", //Para alinear los elementos al centro
        paddingTop:50 //para bajar los elememtos del contenido (modificado por mi)
    },
    input:
    {
        width:"85%",
        marginTop:50, //modificado por mi, valor inicial
        height:50,
        padding:10,
        
        
    },
    btnEntrar:
    {
        width:270,
        height:75,
        marginTop:50, //modificado por mi
        marginBottom: 30,//modificado por mi 
        padding:0, //modificado por mi
        
    },
    vwico:{
       // flex:1,
        //borderColor: "black",
        //borderWidth: 5, 
        //alignItems:'center',
        //justifyContent:"space-around",
        flexDirection:"row",// coloca los items en fila
        justifyContent:"space-around",//distribuye eñementos a lo largo de la pantalla
        width:"100%"// hace  que el 
       
    },
    ico:{ 
         //flex:1,
         //marginTop: 5, 
        //borderColor: "black",
        //borderWidth: 5, 
        //justifyContent: "space-around",
        backgroundColor:"#25d366",
        paddingHorizontal:10,
        
    },

    txtcrearcuenta:{

        marginTop:20,
    },
    cuenta:{
        color:"#128c7e",
        fontFamily:"Roboto",
        fontSize:15,

    }
})
