import React from 'react';
import { View,Text, Linking, TouchableOpacity, StyleSheet } from 'react-native';

export default function ViewSocial() {
 return (
   <View style={styles.container}>
        <View style={styles.content}>
            <TouchableOpacity onPress={()=>{Linking.openURL('https://instagram.com/ieq.man?igshid=MzRlODBiNWFlZA==')}} 
            style={styles.buttonSocial}>
                <Text>instagram</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{Linking.openURL('https://instagram.com/ieq.man?igshid=MzRlODBiNWFlZA==')}}
            style={styles.buttonSocial}>
                <Text>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{Linking.openURL('https://instagram.com/ieq.man?igshid=MzRlODBiNWFlZA==')}}
            style={styles.buttonSocial}>
                <Text>Telegram</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{Linking.openURL('https://instagram.com/ieq.man?igshid=MzRlODBiNWFlZA==')}}
            style={styles.buttonSocial}>
                <Text>WhatsApp</Text>
            </TouchableOpacity>
        </View>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        marginTop: 15,
        padding: 10,
        height: 390,
    },
    content: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        gap: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonSocial: {
        backgroundColor: '#ccc ',
        width: 180,
        height: 180,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})