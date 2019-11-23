import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/Home';
import Detail from './pages/Detail';
import TypeA from './pages/TypeA';
import TypeB from './pages/TypeB';
import TypeC from './pages/TypeC';
import TypeD from './pages/TypeD';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

// 여러개의 네비게이터를 생성할 수 있고 서로 겹치는 상태로 생성할 수도 있음
const Navigator = createStackNavigator({
  Home,
  TypeA,
  TypeB,
  TypeC,
  TypeD
});
const Container = createAppContainer(Navigator);

export default function App() {
  return (
    <Container />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
