import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function MiTienda() {
    return (
        <View style={styles.container}>
            <Text style={styles.letra} > mi tienda my love Te amo, mi amor   </Text>
            <Text style={styles.letra} > Yaestoy aprendiendo a hacer apps   </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    letra: {
      
      fontSize: 60,
      alignItems: 'center',
      alignContent: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#8DD4D4',
        alignItems: 'center',
        justifyContent: 'center',
      },
  });

  