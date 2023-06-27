import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import HomeContainer from './src/containers/HomeContainer';
import CalendarContainer from './src/containers/CalendarContainer';
import ChatContainer from './src/containers/ChatContainer';
import UserContainer from './src/containers/UserContainer';

import Constants from 'expo-constants';
import BottomBarComponent from './src/components/BottomBarComponent';
import { useState } from 'react';

export default function App() {

  const [selected, setSelected] = useState('home');

  const RenderComponent = () => {
    switch (selected) {
      case 'home': return HomeContainer;
      case 'today': return CalendarContainer;
      case 'chat': return ChatContainer;
      case 'user': return UserContainer;
      default: return HomeContainer;
    }
  }

  return (
    <View style={styles.container}>
      <RenderComponent />
      {/* <HomeContainer /> */}
      <BottomBarComponent selected={selected} setSelected={(value) => setSelected(value)} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#342D7E'
  },
});
