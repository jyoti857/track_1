import React from 'react';
import { View, Text } from 'react-native';
const Spacers = ({children}) => {
    return(
        <View><Text style = {{margin: 10}}>{children}</Text></View>
    )
}

export default Spacers;