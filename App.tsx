import React, { useState } from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const App = () => {
  const [toDoItem, setToDoItem] = useState<string>('');
  const [toDoItems, setToDoItems] = useState<string[]>([]);

  const handleToDoText = (item: string) => {
    setToDoItem(item);
  };

  const addToDoItem = () => {
    setToDoItems(prevItems => [...prevItems, toDoItem]);
    setToDoItem('')
  };

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{flex:1}}>
        <Text style={styles.title}>To Do App</Text>
        <TextInput
          style={styles.inputField}
          placeholder='Enter here...'
          onChangeText={handleToDoText} value={toDoItem} />

        <Pressable style={styles.button} onPress={addToDoItem}>
          <Text style={styles.buttonText}>Add To Do Item</Text>
        </Pressable>

        <View style={{flex:1}}>
        <FlatList
          data={toDoItems}
          style={{ marginTop: 16 }}
          renderItem={(itemData: ListRenderItemInfo<string>) => {
            return (
              <View style={styles.listItem}>
                <Text style={{ color: 'white' }}>{itemData.item}</Text>
              </View>
            );
          }} />
          </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontWeight: '700',
    marginTop: 24,
    fontSize: 28
  },
  inputField: {
    backgroundColor: '#DDDDDD',
    marginHorizontal: 24,
    marginTop: 24,
    padding: 8,
    borderRadius: 8
  },
  button: {
    marginHorizontal: 24,
    marginTop: 24,
    paddingVertical: 12,
    borderRadius: 16,
    backgroundColor: '#202020',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '700'
  },
  listItem: {
    marginHorizontal: 24,
    marginBottom: 16,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#8888FF'
  }
})

export default App;
