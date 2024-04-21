import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const CommonButton = ({ onPress, title, bgcolor, textcolor, disabled }) => {
    return (
        <TouchableOpacity
            disabled={disabled}
            style={{
                backgroundColor: bgcolor,
                justifyContent: 'center',
                alignItems: "center",
                alignSelf: 'center',
                width: '85%',
                height: 50,
                borderRadius: 10,
                marginTop: 50
            }}
            onPress={() => {
                onPress();
            }}>
            <Text style={{ color: textcolor }}>{title}</Text>
        </TouchableOpacity>
    );
};

export default CommonButton;











// import { View, Text } from 'react-native'
// import React from 'react'
// import { TouchableOpacity } from 'react-native-gesture-handler'

// const CommonButton = ({ OnPress, title, bgcolor, textcolor }) => {
//     return (
//         <TouchableOpacity style={{
//             backgroundColor: bgcolor,
//             justifyContent: 'center',
//             alignItems: "center",
//             alignSelf: 'center',
//             width: '85%',
//             height: 50,
//             borderRadius: 10,
//             marginTop: 50
//         }}
//             onPressress={() => {
//                 OnPress();
//             }}>
//             <Text style={{ color: textcolor }}>{title}</Text>

//         </TouchableOpacity>
//     )
// }

// export default CommonButton