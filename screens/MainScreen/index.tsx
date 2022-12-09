import React, { useState } from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  Text,
  TextInput,
  View
} from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import styles from './styles';

type MainScreenProps = { title: string }

const MainScreen = ({ title }: MainScreenProps) => {
  const [toDoItem, setToDoItem] = useState<string>('');
  const [toDoItems, setToDoItems] = useState<string[]>([]);

  const { titleStyle } = styles

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

      <PrimaryButton
        title='Add To Do Item'
        clickEvent={addToDoItem} />

      <FlatList
        data={toDoItems}
        style={{ marginTop: 16, flex: 1 }}
        renderItem={(itemData: ListRenderItemInfo<string>) => {
          return (
            <View style={styles.listItem}>
              <Text style={{ color: 'white' }}>{itemData.item}</Text>
            </View>
          );
        }} />
    </View>

  );
}

export default MainScreen;
