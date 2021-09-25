import React from 'react'
import { View, Text } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {createDrawerNavigator} from '@react-navigation/drawer'

import { Icon } from 'react-native-elements'

import {createStackNavigator} from '@react-navigation/stack'

import TiendaStack from './TiendaStack'
import PerfilStack from './PerfilStack'
import MiTiendaStack from './MiTiendaStack'
import ShopBotton from '../componentes/ShopBotton'


const Tab =createBottomTabNavigator();
const Drawer = createStackNavigator();

const TabBar = () => {

    return(

        <Tab.Navigator initialRouteName="mitienda" tabBarOptions={{inactiveTintColor: "#fff",activeTintColor:"#fff", 
        style:{
            borderTopLeftRadius:60, 
            borderTopRightRadius:60,
            alignItems:"center", 
            backgroundColor:"#128c7e",
            paddingBottom:5,


            }
        }}
        
        screenOptions={({route})=> ({

            tabBarIcon:({color}) => mostrarIcono(route,color)

        })} 
        >

            <Tab.Screen component = {TiendaStack} name ="tiendastack" options={{title:"tienda", 
            tabBarIcon:() => <ShopBotton/>
            }}/>
            <Tab.Screen component = {MiTiendaStack} name ="mitienda" options={{title:"mi tienda"}} />
            <Tab.Screen component = {PerfilStack} name ="perfilStack" options={{title:"cuenta"}} />
            

        </Tab.Navigator>
    )
}

function mostrarIcono (route,color){

    let iconName = "";
    
    switch(route.name)
    {
        case "tiendastack":
            iconName = "cart-outline"
            break;
        case "perfilStack":
            iconName= "account-circle-outline"
            break;    
        case  "mitienda":
            iconName ="cart-outline"
            break; 
    }
    return(
        <Icon type="material-community" name= {iconName} size= {24} color={color} />
    )
}

export default function RutasAutenticadas() {
    return (
        <NavigationContainer>
            <TabBar/>
        </NavigationContainer>
       
    )
}
