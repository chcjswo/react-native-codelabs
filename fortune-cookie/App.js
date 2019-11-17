import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const imageUrl = 'https://www.astrology.com/images-US/games/game-fortune-cookie-1.png';
const messages = [
	'자동차를 조심하세요',
	'건강에 유의 하세요.',
	'술 조심 하세요.',
	'여자를 조심하세요.'
];
const index = Math.floor(Math.random() * messages.length);

export default function App() {
	const source = {
		uri: imageUrl
	};
	const style = {
		width: 238,
		height: 150
	};

	return (
		<View style={styles.container}>
			<Image source={source} style={style} />
			<Text>{messages[index]}</Text>
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
