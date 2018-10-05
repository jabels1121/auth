import React, {Component} from 'react';
import {Text} from 'react-native';
import firebase from 'firebase';
import {Button, Card, CardSection, Input, Spinner} from './common/exportComponent';

export default class LoginForm extends Component{
    state = { email: '', password: '', error: '', loading: false };

    onButtonPress(){
        const { email, password } = this.state;

        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
               firebase.auth().createUserWithEmailAndPassword(email, password)
                   .then(this.onLoginSuccess.bind(this))
                   .catch(this.onLoginFailed.bind(this));
            });
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        });
    }

    onLoginFailed() {
        this.setState({
            error: 'Authentication failed',
            loading: false
        });
    };

    renderButton() {
        if(this.state.loading) {
            return <Spinner size={'large'}/>
        }
        return(
            <Button onPress={this.onButtonPress.bind(this)}>
                LOGIN
            </Button>
        )
    }

    renderError() {
        if (this.state.error === 'Authentication failed') {
            return(
                <CardSection>
                    <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                </CardSection>
            );
        }
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        label='E-mail'
                        placeholder='user@gmail.com'
                    />
                </CardSection>

                <CardSection>
                    <Input
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        label='Password'
                        placeholder='password'
                        secureTextEntry
                    />
                </CardSection>

                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};
