import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'galio-framework';

export default function App() {
  return (
    <View style={styles.container}>
      <Button>button</Button>
      <Button color="error">another button</Button>
      <Text p muted>
        Hi, I'm a Galio component
      </Text>
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
