import React from 'react';
import { Button, Image, Text, View } from 'react-native';
import image from '../assets/hand-type-d.png';
import Spacer from '../components/Spacer';

const TypeD = props => {
    return (
        <View>
            <Image source={image} style={{ width: 272, height: 350 }} />
            <Text>D. 손바닥이 위로 오고 손가락 사이를 오므린 사람</Text>
            <Spacer height={20} />
            <Text>
                상처받기를 두려워하는 당신은 낮선 사람에게는 차갑게 대하나 내 사람이라고 생각되면 엄청 잘해줍니다.
                당신은 무시와 무관심을 제일 싫어하여 살짝 관종끼가 있습니다.
                강해보이고 싶어하나 의외로 여려서 상처를 잘 받는 타입으로 자존심은 하늘을 찌를듯이 높으나 자신감이 부족합니다.
                사람들과의 만남보다는 집에 있는것을 좋아하며 멍때리는것을 좋아합니다.
                친구가 부탁하면 잘 들어주는 편으로 사기를 당하기 쉬우니 조심해야합니다.
            </Text>
            <Button
                title='돌아가기'
                onPress={() => { props.navigation.goBack() }}
            />
        </View>
    )
}

TypeD.navigationOptions = {
    title: '결과 페이지 D'
}

export default TypeD;