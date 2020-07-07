import CreateDataContext from './CreateDataContext';
import trackerApi from '../api/Tracker';
import { navigate } from '../navigationRef';
import {AsyncStorage} from 'react-native';

const authReducer = (state, action)  => {
    switch(state.action){
        case 'signup': 

        // console.log("from authreducer signup ,, ", state)
        return {...state, token: action.payload};
        case "add_error" :
            return {
                ...state, 
                errorMessage: action.payload
            };
        
        default: state;
    }
}

const signup = dispatch =>  async ({email, password}) =>{
        try{
        const response = await trackerApi.post('/signup', {email, password});
        const token = response.data.token;
        console.log(token);
        await AsyncStorage.setItem('token', token);
        dispatch({type: "signup", payload: token});

        // after successful of signup navigate to trackList
        //  using a clever function to make navigation accessable outside react, just like here
        navigate("TarckList"); // pass the route name as this custom navigation function takes 
        // one of its arguement as route name


        }catch(err){
            // console.log(err.errorMessage? err.errorMessage: "something went wrong");
            console.log(err);
            dispatch({type: "add_error", payload: 'something went wrong with signup'})
        }
    };

export const { Provider, Context } = CreateDataContext(
    authReducer, 
    {signup}, 
    {errorMessage: 'default error message', token: "token default"}
    );

