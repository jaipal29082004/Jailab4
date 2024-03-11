import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import ToDoForm from './ToDoForm';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    setTasks((currentTasks) => [
      ...currentTasks,
      { id: Math.random().toString(), value: taskText },
    ]);
  };

  return (
    <View style={styles.screen}>
      <ToDoForm addTask={addTask} />
      <FlatList
        keyExtractor={(item) => item.id}
        data={tasks}
        renderItem={(itemData) => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});
