import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common/exportComponent';

class LoginForm extends Component{
    state = { email: '', password: '' };
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

                <CardSection>
                    <Button>
                        LOGIN
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;