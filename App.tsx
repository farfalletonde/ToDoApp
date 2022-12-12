import React from 'react';
import MainScreen from './screens/MainScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailScreen from './screens/DetailScreen';

export type RootStackParams = {
  Home: any;
  Details: {
    toDoItem: string;
  };
};

const App = () => {
  const RootStack = createNativeStackNavigator<RootStackParams>();

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={MainScreen} />
        <RootStack.Screen name="Details" component={DetailScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
