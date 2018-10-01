import React, { Component } from 'react';
import { Button, Card, CardSection } from './common/exportComponent';

class LoginForm extends Component{
    render(){
        return(
            <Card>
                <CardSection />
                <CardSection />

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