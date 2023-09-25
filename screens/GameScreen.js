import { StyleSheet, View, Text, Alert } from 'react-native'
import { useEffect, useState } from 'react'

import Title from '../components/ui/Title'
import NumberContainer from '../components/game/NumberContainer'
import PrimaryButton from '../components/ui/PrimaryButton'

const generateRandomBetween = (min, max, exclude) => {
  const randNumber = Math.floor(Math.random() * (max - min)) + min

  if (randNumber === exclude) {
    return generateRandomBetween(min, max, exclude)
  } else {
    return randNumber
  }
}

let min = 1
let max = 100

export default function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber)

  const [currentGuess, setCurrentGuess] = useState(initialGuess)

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver()
    }
  }, [currentGuess, userNumber, onGameOver])

  const nextGuessHandler = (direction) => {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'higher' && currentGuess > userNumber)
    ) {
      Alert.alert('Please Do Not Lie', 'You know this is wrong...', [
        { text: 'Sorry', style: 'cancel' },
      ])
      return
    }

    if (direction === 'lower') {
      max = currentGuess
    } else {
      min = currentGuess + 1
    }
    const newRandNumber = generateRandomBetween(min, max, currentGuess)
    setCurrentGuess(newRandNumber)
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        <View style={styles.directionButtons}>
          <PrimaryButton onPress={() => nextGuessHandler('lower')}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={() => nextGuessHandler('higher')}>
            +
          </PrimaryButton>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  directionButtons: {
    flexDirection: 'row',
  },
})
