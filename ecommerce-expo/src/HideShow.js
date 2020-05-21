import React, { Component } from 'react';
import { View } from 'react-native';
import PasswordInputText from 'react-native-hide-show-password-input';
 
 
// use in your class
export default class App extends Component {
    state = {
        password: '',
    };
 
    render() {
        return (
            <View style={{margin: 20}}>
                <PasswordInputText
                    value={this.state.password}
                    onChangeText={ (password) => this.setState({ password }) }
                />
            </View>
        );
    }
}