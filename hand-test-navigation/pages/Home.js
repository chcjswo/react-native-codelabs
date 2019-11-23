import React from 'react';
import { Image, TouchableOpacity, Button, View, SafeAreaView } from 'react-native';
import HGroup from '../components/HGroup';
import Spacer from '../components/Spacer';
import TypeA from '../assets/hand-type-a.png';
import TypeB from '../assets/hand-type-b.png';
import TypeC from '../assets/hand-type-c.png';
import TypeD from '../assets/hand-type-d.png';
import Center from '../components/Center';


const Home = props => {
    const imageStyle = {
        width: 136,
        height: 175
    }
    return (
        <SafeAreaView>
            <Center>
                <HGroup>
                    <TouchableOpacity onPress={() => props.navigation.navigate('TypeA')}>
                        <Image source={TypeA} style={imageStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate('TypeB')}>
                        <Image source={TypeB} style={imageStyle} />
                    </TouchableOpacity>
                </HGroup>
            </Center>
            <Center>
                <HGroup>
                    <TouchableOpacity onPress={() => props.navigation.navigate('TypeC')}>
                        <Image source={TypeC} style={imageStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate('TypeD')}>
                        <Image source={TypeD} style={imageStyle} />
                    </TouchableOpacity>
                </HGroup>
            </Center>
            {/* <Button
                title={'디테일 페이지로'}
                onPress={() => { props.navigation.navigate('Detail') }}
            /> */}
        </SafeAreaView>
    )
}

Home.navigationOptions = {
    title: '심리테스트'
}

export default Home;