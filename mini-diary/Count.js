import React from 'react';
import { AsyncStorage, Button, StyleSheet, Text, View } from 'react-native';

export default function Count() {
  const [count, setCount] = React.useState(0);
  React.useEffect(async () => {
    // AsyncStorage.getItem('count').then(value => {
    //   if (value) {
    //     setCount(parseInt(value, 10));
    //   }
    // });

    const value = await AsyncStorage.getItem('count');
    if (value) {
      setCount(parseInt(value, 10));
    }
  }, []);
  const addCount = () => {
    const newCount = count + 1;
    setCount(newCount);
    AsyncStorage.setItem('count', newCount.toString());
  };
  const reset = () => {
    const newCount = count + 1;
    setCount(0);
    AsyncStorage.removeItem('count');
  };
  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <Button title="클릭" onPress={addCount} />
      <Button title="리셋" onPress={reset} />
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
