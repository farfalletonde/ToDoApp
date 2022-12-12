import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';
import {RootStackParams} from '../../App';
import styles from './styles';

type DetailProps = NativeStackScreenProps<RootStackParams, 'Details'>;
const DetailScreen = (toDoItem: DetailProps) => {
  const args = toDoItem.route.params;
  const {titleStyle} = styles;

  return (
    <View style={{flex: 1}}>
      <Text style={titleStyle}>{args.toDoItem}</Text>
    </View>
  );
};

export default DetailScreen;
