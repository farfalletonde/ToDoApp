import PushNotification, {Importance} from 'react-native-push-notification';

PushNotification.createChannel(
  {
    channelId: 'channel-id',
    channelName: 'My channel',
    soundName: 'default',
    vibrate: true,
  },
  created => console.log(`createChannel returned '${created}'`),
);

export const showNotification = (notificationMessage: string) => {
  PushNotification.localNotificationSchedule({
    channelId: 'channel-id',
    id: 0,
    date: new Date(Date.now() + 10 * 1000),
    message: notificationMessage,
  });
};
