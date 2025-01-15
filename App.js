import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  const [input, setInput] = useState('');

  // Handle button press to add value to input
  const handlePress = (value) => {
    setInput(input + value);
  };

  // Clear the input
  const handleClear = () => {
    setInput('');
  };

  // Evaluate the input string as a mathematical expression
  const handleEvaluate = () => {
    try {
      setInput(eval(input).toString());
    } catch (e) {
      setInput('Error');
    }
  };

  return (
    <View style={styles.container}>
      {/* Displaying current input */}
      <Text style={styles.result}>{input}</Text>
      
      {/* Button rows */}
      <View style={styles.buttonContainer}>
        <Button title="1" onPress={() => handlePress('1')} />
        <Button title="2" onPress={() => handlePress('2')} />
        <Button title="3" onPress={() => handlePress('3')} />
        <Button title="+" onPress={() => handlePress('+')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="4" onPress={() => handlePress('4')} />
        <Button title="5" onPress={() => handlePress('5')} />
        <Button title="6" onPress={() => handlePress('6')} />
        <Button title="-" onPress={() => handlePress('-')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="7" onPress={() => handlePress('7')} />
        <Button title="8" onPress={() => handlePress('8')} />
        <Button title="9" onPress={() => handlePress('9')} />
        <Button title="*" onPress={() => handlePress('*')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="0" onPress={() => handlePress('0')} />
        <Button title="C" onPress={handleClear} />
        
        {/* Green "=" button */}
        <TouchableOpacity style={styles.equalButton} onPress={handleEvaluate}>
          <Text style={styles.equalText}>=</Text>
        </TouchableOpacity>
        
        <Button title="/" onPress={() => handlePress('/')} />
      </View>
      
      {/* Footer text */}
      <Text style={styles.footer}>Calc by Manasi</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f9',  // Background color
  },
  result: {
    fontSize: 40,
    marginBottom: 20,
    color: '#333',  // Result text color
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    fontSize: 16,
    color: '#000',
  },
  equalButton: {
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    margin: 5,
    borderRadius: 30,
  },
  equalText: {
    color: 'white',
    fontSize: 30,
  },
});

export default App;
