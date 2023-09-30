import React from 'react';
import { ScrollView, StyleSheet, Image } from 'react-native';

export default function ScrollImage() {
 return (
    <ScrollView style={styles.scrollViewHome} horizontal={true} showsHorizontalScrollIndicator={false}>
      <Image
      style={styles.imgHome}
      source={require('../../../assets/icon.png')}
        />
        <Image
      style={styles.imgHome}
      source={require('../../../assets/icon.png')}
        />
        <Image
      style={styles.imgHome}
      source={require('../../../assets/icon.png')}
        />
        <Image
      style={styles.imgHome}
      source={require('../../../assets/icon.png')}
        />
        <Image
      style={styles.imgHome}
      source={require('../../../assets/icon.png')}
        />
        <Image
      style={styles.imgHome}
      source={require('../../../assets/icon.png')}
        />
        <Image
      style={styles.imgHome}
      source={require('../../../assets/icon.png')}
        />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewHome: {
    backgroundColor: '#ddd',
    height: 150,
    paddingTop: 25
  },
  imgHome: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  }
});