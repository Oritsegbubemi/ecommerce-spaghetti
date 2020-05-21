import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import SignupForm from '../components/SignupForm';

export default class Signup extends Component {
    onLogin() {
        Actions.login();
    }
    render() {
        return (
            <ScrollView style={styles.scroll}>
                <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.textStyle}>Sign Up</Text>
                </View>
                    <SignupForm />
                    <View style={styles.footer}>
                        <Text style={styles.textStyle1}>Already have an account?</Text>
                        <TouchableOpacity onPress={this.onLogin.bind(this)}>
                            <Text style={styles.textStyle2}>Log in</Text>
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
        backgroundColor: '#f2960c',
    },
    header: {
        marginTop: 5,
    },
    textStyle: {
        fontSize: 30,
        paddingTop: 8,
        fontWeight: 'bold',
        color: '#fff',
        alignSelf: 'center'
    },
    footer: {
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 10,
    },
    textStyle1: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },
    textStyle2: {
        paddingLeft: 10,
        fontSize: 20,
        color: '#fcc998',
        fontWeight: 'bold'
    },    
});
