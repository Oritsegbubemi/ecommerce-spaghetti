import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, Alert } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, signupUser } from '../actions/SignupAction';
import { Input, Button, Spinner } from '../common';

class SignupForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }
    onButtonPress() {
        const { email, password } = this.props;
        this.props.signupUser({ email, password });   
    }
    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Proceed
            </Button>
        );
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>         
                    <Input
                        placeholder="Username"
                        name='md-person'
                        autoFocus
                    />
                    <Input
                        placeholder="Phone"
                        keyboardType='phone-pad'
                        name='ios-call'
                    />
                    <Input
                        placeholder="Email Address"
                        keyboardType='email-address'
                        placeholder="Email"
                        value={this.props.email}
                        onChangeText={this.onEmailChange.bind(this)}
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
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonStyle: {
        marginTop: 2
    },
    inputStyle: {
        width: 360,
        padding: 10,
        paddingBottom: 20,
        fontSize: 23,
        fontWeight: 'bold',
        color: 'rgba(255,255,255,0.9)'
    },
    errorStyle: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold'
    }
});
const mapStateToProps = state => ({
    email: state.sign.email,
    password: state.sign.password,
    error: state.sign.error,
    loading: state.sign.loading
});

export default connect(mapStateToProps, { 
emailChanged, 
passwordChanged,
signupUser,
})(SignupForm);
