import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function ToDoForm({ addTask }) {
  const [enteredTask, setEnteredTask] = useState('');

  const taskInputHandler = (enteredText) => {
    setEnteredTask(enteredText);
  };

  const addTaskHandler = () => {
    if (enteredTask.trim().length === 0) {
      return;
    }
    addTask(enteredTask);
    setEnteredTask('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Add a new task..."
        style={styles.input}
        onChangeText={taskInputHandler}
        value={enteredTask}
      />
      {/*Button*/}
      <Button title="ADD" onPress={addTaskHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10,
  },
});

export default ToDoForm;
