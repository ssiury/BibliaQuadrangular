import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';

import api from '../../services/api';
import axios from 'axios';

export default function VerseDay() {
    
    const [ verse, setVerse] = useState();
    
    api.get("verses/nvi/sl/23").then((response) => {
        setVerse(response.data.verses[0].text);
    });

    return (
        <View style={styles.verseDay}>
            <Text style={styles.titleVerse}>
                Versículo do Dia
            </Text>
            <Text style={styles.textVerse}>
                {verse}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    verseDay: {
        backgroundColor: '#ddd',
        marginTop: 25,
        paddingVertical: 15,
        marginHorizontal: 10,
        paddingHorizontal: 10
    },
    titleVerse: {
        display: 'flex',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        marginBottom: 5
    },
    textVerse: {
        textAlign:'center',
    }
  });