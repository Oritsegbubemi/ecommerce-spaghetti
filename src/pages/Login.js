import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import LoginForm from '../components/LoginForm';

export default class Login extends Component {
    onSignup() {
        Actions.signup();
    }
    onForget() {
        Actions.resetpage();
    }
    render() {
        return (
            <ScrollView style={styles.scroll}>
                <View style={styles.container}>
                    <LoginForm />
                    <View style={styles.footer}>
                        <TouchableOpacity onPress={this.onForget.bind(this)}>
                            <Text style={styles.textStyle1}>Forgot Password?  |</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onSignup.bind(this)}>
                            <Text style={styles.textStyle2}>Sign Up Here</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scroll: {
        backgroundColor: '#f2960c'
    },
    footer: {
        flexDirection: 'row',
        marginTop: 30,
    },
    textStyle1: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    },
    textStyle2: {
        paddingLeft: 18,
        fontSize: 20,
        color: '#fcc998',
        fontWeight: 'bold'
    }  
});
