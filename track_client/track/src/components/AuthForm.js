import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native'; 
import {TextInput, Button} from 'react-native-paper';
import Spacers from './helpers/Spacers';

const AuthFrom = ({screenName, onSubmit, errorMessage}) => {
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    return(
        <View style = {styles.container}>
        <Text style = {{fontSize : 40}}>This is an  {screenName} screen!</Text>
            <Spacers />
            <TextInput label = 'email' 
            value = {email}
            onChangeText = {setemail}
            />
            <Spacers />
            <TextInput label = 'Password' 
            value = {password}
            onChangeText = {setPassword}
            />
            {/* <Spacers>{errorMessage.token}</Spacers> */}

            
            <Button onPress = {() =>onSubmit({email, password})}>
                {screenName} 
            </Button>
            
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        // borderWidth: 10,
        // borderColor: 'red',
        marginTop: 30,
        flex: 1,
        justifyContent: "center",
        marginBottom: 250,
    }
})

export default AuthFrom;