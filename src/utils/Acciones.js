//sirve para manejar los metodos de firebase

import { firebaseapp } from "./Firebase";
import * as firebase from 'firebase'

export const validarSesion = () => {

    firebase.auth().onAuthStateChanged((user) => {
        if(user){
            setvalidaresion(true)
        }
        else{
            setvalidaresion(false)
        }
    })

}



export const cerrarsesion = () => {

    firebase.auth().signOut()
    console.log("has cerrado sesión")
    
}

export const validarPhone = () => {

    firebase.auth().onAuthStateChanged((user) => {

        if (user.phoneNumber){
            setphoneauth(true)
        }

    })

}