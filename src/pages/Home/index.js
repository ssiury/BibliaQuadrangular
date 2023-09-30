import React, {Component}from 'react';
import { View, Text, ScrollView, StyleSheet, Image} from 'react-native';

import ScrollImage from '../../components/ScrollImage';
import VerseDay from '../../components/VerseDay';
import ViewSocial from '../../components/ViewSocial';

export default function Home() {


  return (
    <View style={styles.container}>
      <ScrollImage />
      <VerseDay />
      <ViewSocial />
      <Text style={styles.credits}>@ABíbliaDigital</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  credits: {
    marginTop: 10,
    textAlign: 'center'
  }
});