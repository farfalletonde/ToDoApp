import React, { useState } from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import styles from './styles';

type MainScreenProps = { title: string }

const MainScreen = ({ title }: MainScreenProps) => {
  const [toDoItem, setToDoItem] = useState<string>('');
  const [toDoItems, setToDoItems] = useState<string[]>([]);

  const { titleStyle, button, buttonText } = styles

  const handleToDoText = (item: string) => {
    setToDoItem(item);
  };

  const addToDoItem = () => {
    setToDoItems(prevItems => [...prevItems, toDoItem]);
    setToDoItem('')
  };

  return (

    <View style={{ flex: 1 }}>
      <Text style={titleStyle}>{title}</Text>
      <TextInput
        style={styles.inputField}
        placeholder='Enter here...'
        onChangeText={handleToDoText} value={toDoItem} />

      <Pressable style={button} onPress={addToDoItem}>
        <Text style={buttonText}>Add To Do Item</Text>
      </Pressable>

      <View style={{ flex: 1 }}>
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

  );
}

export default MainScreen;
