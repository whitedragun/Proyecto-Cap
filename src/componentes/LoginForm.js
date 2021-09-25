import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {Icon, Input, Button, Divider} from 'react-native-elements'
import {useNavigation} from '@react-navigation/native'
import { validateEmail } from '../utils/ValidarEmail' 
//Es una clase que dice yo recibo algo, si recibo algo es falso, si no recibo algo es verdadero, pq tiene que ser empty; si está vacio saca un boolean
import {isEmpty} from 'lodash'

import { validarSesion ,cerrarsesion } from '../utils/Acciones'
import * as firebase from 'firebase'

import * as GoogleSignin from 'expo-google-sign-in'
import * as Facebook from 'expo-facebook'

import Loading from './Loading'


export default function LoginForm(props){// el props sirve para usar las refenrencias ? 

    const{toastRef}= props;

    //useState es como un get y set al mismo tiempo
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [show, setshow] = useState(true);
    const [loading, setloading] = useState(false);
    
    const navigation=useNavigation();

    //validarSesion();


    const iniciarSesion = () => {

        if(!validateEmail(email)){

            toastRef.current.show("ingresa correo valido")

        }else if(isEmpty(email) || isEmpty(password)){

            toastRef.current.show("No te olvidas de ingresar correo y contraseña")
            
        } else{

            setloading(true)

            firebase.auth().singInWithEmailAndPassword(email,password)
            .then((response) => {
                setloading(false)
                toastRef.current.show("Ha iniciado sesión correctamente")
                console.log(firebase.auth().currentUser)

            } )
            .catch((err)=>{
                console.log(err)
                toastRef.current.show("El usuario o la contraseña es incorrecta")
            })
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
                name:show ? "eye" : "user-graduate",
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
            <Button title="Ingresar" containerStyle={styles.btnEntrar} buttonStyle={{backgroundColor:"#128c7e"}} titleStyle={{fontSize:25}}
                onPress={() => {iniciarSesion() } }
            />
            <Text style={styles.txtcrearcuenta}>¿No tienes cuenta?
                <Text style={{color: "#128c7e", fontWeight:'bold',}} onPress={() => navigation.navigate('register')} >{"   "} Crear cuenta</Text>
            </Text>
            <Divider style={{backgroundColor:"#128c7e", height:1, width:"75%",marginTop:20}}/>
            <Text style={{fontSize:20, marginTop:15, color:"gray"}}>O</Text>

            <View style={styles.vwico} >
                
                <TouchableOpacity style={styles.ico}>
                    <Icon size={44} type="material-community" name="google" color="#128c7e" backgroundColor="transparent" containerStyle ={{justifyContent:"space-between"}}  />
                </TouchableOpacity >
                <TouchableOpacity style={styles.ico}>
                    <Icon size={44} type="material-community" name="facebook" color="#128c7e" backgroundColor="transparent"  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.ico}>
                    <Icon size={44} type="material-community" name="whatsapp" color="#128c7e" backgroundColor="transparent" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.ico}>
                    <Icon size={44} type="material-community" name="twitter" color="#128c7e" backgroundColor="transparent" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.ico}>
                    <Icon size={44} type="material-community" name="youtube" color="#128c7e" backgroundColor="transparent" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.ico}>
                    <Icon size={44} type="material-community" name="github" color="#128c7e" backgroundColor="transparent" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.ico}>
                    <Icon size={44} type="material-community" name="instagram" color="#128c7e" backgroundColor="transparent" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.ico}> 
                    <Icon size={44} type="material-community" name="pinterest" color="#128c7e" backgroundColor="transparent" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.ico}>
                    <Icon size={44} type="material-community" name="microsoft-xbox" color="#128c7e" backgroundColor="transparent" />
                </TouchableOpacity >
                <TouchableOpacity style={styles.ico}>
                    <Icon size={44} type="material-community" name="nintendo-switch" color="#128c7e" backgroundColor="transparent" />
                </TouchableOpacity>
                
            </View>

            <Loading isVisible ={loading} text="Cargando configuración" />
        </View>
    )
}

/**
 * Logica del inicio de sesión de google 
 * 
 */


/**
 * Logica de inicio de sesión de facebook
 * 
 */


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
        width:"100%"// hace  que funcione la distribución 
       
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