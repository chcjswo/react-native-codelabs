import React from 'react';
import { Text, View } from 'react-native';

// 리엑트 함수형 컴포넌트
function Ball(props) {
	const ballStyle = {
		width: 50,
		height: 50,
		backgroundColor: '#000',
		borderRadius: 25,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column'
	};
	const textStyle = {
		fontSize: 18,
		color: 'white',
		fontWeight: 'bold'
	};

	if (props.number < 16) {
		ballStyle.backgroundColor = 'red';
	} else if (props.number < 31) {
		ballStyle.backgroundColor = 'blue';
	}

	return (
		<View style={ballStyle}>
			<Text style={textStyle}>{props.number}</Text>
		</View>
	);
}

export default Ball;
