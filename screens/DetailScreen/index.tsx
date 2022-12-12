import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';
import PushNotification from 'react-native-push-notification';
import {RootStackParams} from '../../App';
import PrimaryButton from '../../components/PrimaryButton';
import {showNotification} from '../../utils/Notification/NotificationChannel';
import styles from './styles';

type DetailProps = NativeStackScreenProps<RootStackParams, 'Details'>;
const DetailScreen = (toDoItem: DetailProps) => {
  const args = toDoItem.route.params;
  const {titleStyle} = styles;

  return (
    <View style={{flex: 1}}>
      <Text style={titleStyle}>{args.toDoItem}</Text>
      <PrimaryButton
        title="Show notification"
        clickEvent={() => {
          showNotification('Notification');
        }}
      />
    </View>
  );
};

export default DetailScreen;
