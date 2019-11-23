import React from 'react';
import { View } from 'react-native';

// function VGroup(props) {
//     return (
//         <View style={{ flexDirection: 'column', }}>
//             {props.children}
//         </View>
//     )
// }

class VGroup extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flexDirection: 'column' }}>
                {this.props.children}
            </View>
        )
    }

    componentDidMount() {
        // 컴포넌트가 화면에 마운트 된 직후
    }
    componentDidUpdate() {
        //
    }
}

export default VGroup;