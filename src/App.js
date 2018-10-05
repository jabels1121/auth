import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Button, Header, Spinner} from './components/common/exportComponent';
import LoginForm from './components/LoginForm';

class App extends Component{
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyDiISz_4Nh93TNqSuwKHOyXjVCXF-emepc",
            authDomain: "auth-c8805.firebaseapp.com",
            databaseURL: "https://auth-c8805.firebaseio.com",
            projectId: "auth-c8805",
            storageBucket: "auth-c8805.appspot.com",
            messagingSenderId: "972625468707"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false});
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return(
                    <Button onPress={() => firebase.auth().signOut()}>
                        Sign out
                    </Button>
                );
            case false:
                return <LoginForm />;
            default:
                return (
                    <View style={styles.loadingSpinnerStyle}>
                        <Spinner size={'large'} />
                    </View>
                );
        }
    }

    render(){
        return(
            <View style={styles.stylesForParentView}>
                <Header headerText='Authentication'/>
                {this.renderContent()}
            </View>
        );
    }
}

const styles = {
    stylesForParentView: {
        flex: 1,
        backgroundColor: '#f1f1f1'
    },
    loadingSpinnerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    }
};

export default App;


