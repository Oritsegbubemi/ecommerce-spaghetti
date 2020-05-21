import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions/LoginAction';
import { Input, Button, Spinner } from '../common';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }
    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });  
    }
    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
    }
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.logoStyle}
                    // eslint-disable-next-line global-require
                    source={require('../images/hello.png')} 
                />
                <Input
                    placeholder="Email"
                    keyboardType='email-address'
                    value={this.props.email}
                    onChangeText={this.onEmailChange.bind(this)}
                    autoFocus
                    name='md-mail'
                />
                <Input
                    placeholder="Password"
                    value={this.props.password}
                    onChangeText={this.onPasswordChange.bind(this)}
                    secureTextEntry
                    name='md-lock'
                />
                <Text style={styles.errorStyle}>{this.props.error}</Text>
                <View style={styles.buttonStyle}>
                    {this.renderButton()}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoStyle: {
        width: 150,
        height: 150,
        marginTop: 50,
        marginBottom: 20,
    },
    buttonStyle: {
        marginTop: 0
    },
    errorStyle: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold'
    }
});
const mapStateToProps = state => ({
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
});

export default connect(mapStateToProps, { 
emailChanged, 
passwordChanged,
loginUser,
})(LoginForm);
