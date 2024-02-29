import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
  const logo = require('../assets/icon.png');
  return <Image source={logo} 
  style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
})
