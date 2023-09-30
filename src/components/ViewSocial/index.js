import React from 'react';
import { View,Text, Linking, TouchableOpacity, StyleSheet } from 'react-native';

export default function ViewSocial() {
 return (
   <View style={styles.container}>
        <TouchableOpacity onPress={()=>{Linking.openURL('https://instagram.com/ieq.man?igshid=MzRlODBiNWFlZA==')}} 
        style={styles.buttonSocial}>
            <Text>instagram</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{Linking.openURL('https://instagram.com/ieq.man?igshid=MzRlODBiNWFlZA==')}}
        style={styles.buttonSocial}>
            <Text>instagram</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{Linking.openURL('https://instagram.com/ieq.man?igshid=MzRlODBiNWFlZA==')}}
        style={styles.buttonSocial}>
            <Text>instagram</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{Linking.openURL('https://instagram.com/ieq.man?igshid=MzRlODBiNWFlZA==')}}
        style={styles.buttonSocial}>
            <Text>instagram</Text>
        </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
        gap: 10,
        
    },
    buttonSocial: {
        backgroundColor: '#f9f',
        width: 180,
        height: 180,
    }
})