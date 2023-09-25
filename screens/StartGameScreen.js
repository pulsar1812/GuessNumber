import { useState } from 'react'
import { StyleSheet, TextInput, View, Alert } from 'react-native'

import PrimaryButton from '../components/ui/PrimaryButton'
import { Colors } from '../constants/colors'

export default function StartGameScreen({ onPickNumber }) {
  const [inputNumber, setInputNumber] = useState('')

  const inputHandler = (text) => {
    setInputNumber(text)
  }

  const resetInputHandler = () => {
    setInputNumber('')
  }

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(inputNumber)

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid Number',
        'Number must be an integer between 1 and 99.',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
      )

      return
    }

    onPickNumber(chosenNumber)
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType='number-pad'
        value={inputNumber}
        onChangeText={inputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary800,
    marginTop: 100,
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 0.35,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
  numberInput: {
    color: Colors.accent500,
    height: 50,
    width: 50,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 8,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
  },
})
