import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

export default function GameScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Opponent's Guess</Text>
      <View>
        <Text>Higher or lower?</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ddb52f',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#ddb52f',
    padding: 12,
  },
})
