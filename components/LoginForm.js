import React, { Component } from 'react';
import { Button, Input, Card, CardSection } from './common';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'User' };
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label="User"  
                        value={this.state.text}
                        onChangeText={text => this.setState({ text })}
                    />
                </CardSection>
                <CardSection>
                    <Button>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;
