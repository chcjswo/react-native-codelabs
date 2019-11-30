import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styled from 'styled-components/native';

const CustomButton = styled.TouchableOpacity`

`;

const CustomView = styled.View`
  border: 1px solid #e5e5e5;
  padding: 8px 12px;
  width: ${props => props.width ? props.width : '300px'};
`;

const CustomButtonText = styled.Text`
  font-size: 16px;
  text-align: center;

    ${props => {
        if (props.type === 'danger') {
            return 'color: red';
        }
        return '';
    }}
    ${props => props.type === 'warning' ? 'color: yellow' : ''}
`;

export default props => (
    < CustomButton {...props}>
        <CustomView {...props}>
            <CustomButtonText {...props}>
                {props.children}
            </CustomButtonText>
        </CustomView>
    </CustomButton >
);