import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common/exportComponent';
import LoginForm from './components/LoginForm';

class App extends Component{
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyDiISz_4Nh93TNqSuwKHOyXjVCXF-emepc",
            authDomain: "auth-c8805.firebaseapp.com",
            databaseURL: "https://auth-c8805.firebaseio.com",
            projectId: "auth-c8805",
            storageBucket: "auth-c8805.appspot.com",
            messagingSenderId: "972625468707"
        })
    }
    render(){
        return(
            <View>
                <Header headerText='Authentication'/>
                <LoginForm />
            </View>
        );
    }
}

export default App;
