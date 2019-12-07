import React from 'react';
import { StyleSheet, Alert, SafeAreaView, FlatList } from 'react-native';
import axios from 'axios';
import Button from './components/Button';
import Input from './components/Input';

const uuid = require('uuid/v4');

export default function App() {
  const [keyword, setKeyword] = React.useState('');
  const [list, setList] = React.useState([]);
  const search = () => {
    // const params = {
    //   confmKey: '',
    //   keyword: keyword,
    //   resultType: 'json'
    // }

    // const params = new URLSearchParams();
    // params.set('confmKey', '');
    // params.set('keyword', keyword);
    // params.set('resultType', 'json');

    axios.get(`http://www.juso.go.kr/addrlink/addrLinkApi.do?confmKey=&keyword=${keyword}&resultType=json`)
      .then(response => {
        console.log(response);
        console.log(keyword);
      })
      .catch(error => {
        Alert.alert(error.message);
        console.error(error);
      })
  }
  return (
    <SafeAreaView style={styles.container}>
      <Input value={keyword} onChangeText={text => setKeyword(text)} />
      <Button onPress={search}>검색</Button>
      <FlatList
        data={list}
        keyExtractor={item => uuid.toString()}
      />
    </SafeAreaView>
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
