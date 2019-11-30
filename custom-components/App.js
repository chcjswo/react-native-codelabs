import React from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';
import Input from './components/Input';
import TextArea from './components/TextArea';

export default function App() {
  return (
    <View style={styles.container}>
      <Input />
      <TextArea height={500} />
      <Button>
        button 1
      </Button>
      <Button>
        button 2
      </Button>
      <Button type={'warning'}>
        button 3
      </Button>
      <Button type={'danger'}>
        Delete
      </Button>
      <TextInput style={{ width: 300 }} />
    </View>
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
