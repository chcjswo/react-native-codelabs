import React from 'react';
import { Image, StyleSheet, Text, View, Button } from 'react-native';

const url =
	'https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/kDx/image/Nr1LCf_PHCUJ85AznXn9Rq8bOR0.jpg';

export default function App() {
	const [opacity, setOpacity] = React.useState(0.5);
	function opacityDown() {
		setOpacity(opacity - 0.1);
	}
	function opacityUp() {
		setOpacity(opacity + 0.1);
	}
	return (
		<View style={styles.container}>
			<Image
				source={{ uri: url }}
				style={{ width: 320, height: 214, opacity: opacity }}
			/>
			<Button title={'투명하게'} onPress={opacityDown} />
			<Button title={'선명하게'} onPress={opacityUp} />
			<Text></Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
