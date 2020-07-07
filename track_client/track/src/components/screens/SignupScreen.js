import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import Spacers from '../helpers/Spacers';
import { Context as authContext} from '../../contexts/AuthContext';
import AuthForm from '../AuthForm';

const SignupScreen = ({navigation}) =>{
    const {state, signup} = useContext(authContext);
    // const [email, setemail] = useState('');
    // const [password, setPassword] = useState('');
    // console.log("this is navigate ",navigation.navigate);
    console.log("state4324", state);    
    return(
        // <View style = {styles.container}>
        //     <Text style = {{fontSize : 40}}>This is an  SignupScreen!</Text>
        //     <Spacers />
        //     <TextInput label = 'email' 
        //     value = {email}
        //     onChangeText = {setemail}
        //     />
        //     <Spacers />
        //     <TextInput label = 'Password' 
        //     value = {password}
        //     onChangeText = {setPassword}
        //     />
        //     <Button 
        //     onPress = {() => signup({email, password})}>Signup</Button>
        //     <Button  onPress = {() => navigation.navigate('Signin')}>
        //     Go to signin screen from here</Button> 
        //     <Button onPress = {()=> navigation.navigate("mainFlow")} >"go to main flow" </Button>
        // </View>
        <>
            <AuthForm screenName = 'signup' onSubmit = {signup} />
            {/* <Spacers>{state.errorMessage}</Spacers> */}
            <Button style={{marginTop: 350, position: "absolute"}} onPress = {() => navigation.navigate('Signin')}>go to signin screen</Button>
        </>

        

    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 10,
        // borderColor: 'red',
        flex: 1,
        justifyContent: "center",
        marginBottom: 250,
    }
})

export default SignupScreen;