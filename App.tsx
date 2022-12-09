import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import MainScreen from './screens/MainScreen';

const App = () => {

  const customTitle = "To Do App"
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MainScreen title={customTitle} />
    </SafeAreaView>
  );
};

export default App;
