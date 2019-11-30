import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import DiaryList from './pages/DiaryList';
import DiaryForm from './pages/DairyForm';
import DiaryDetail from './pages/DiaryDetail';
import Settings from './pages/Settings';
import { Provider } from 'context-q';

const Navigator = createStackNavigator({
  List: DiaryList,
  Form: DiaryForm,
  Detail: DiaryDetail,
  Settings
});

const Container = createAppContainer(Navigator);

const App = () => {
  return (
    <Provider defaultState={{ fontSize: '40' }}>
      <Container />

    </Provider>
  );
}

export default App;
