import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView } from 'react-native';
import { Header, Icon, Title, Button, Left, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Card, Card2, Button2 } from '../common';

export default class Payment extends Component {
    onButtonPress() {
        const { price, product } = this.props;
        Actions.delivery({ price, product });
    }
    onBackButtonPress() {
        Actions.order();
      }
    render() {
        return (
            <View>
                <Header style={{ backgroundColor: '#f2960c' }} > 
                    <Left>
                        <Button transparent onPress={this.onBackButtonPress.bind(this)}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body style={styles.bodyStyle}>
                        <Title style={styles.headerStyle}>Payment</Title>
                    </Body>
                </Header>
                <ScrollView>
                    <View style={styles.container}>
                        <Card>
                            <View>
                                <Text style={styles.textStyle}>Card Number</Text>
                                <TextInput 
                                placeholder='Enter Card Number'
                                placeholderTextColor='rgba(0,0,0,0.2)'
                                style={styles.inputStyle}
                                underlineColorAndroid='rgba(255,255,255,0)'
                                />
                            </View>
                        </Card>

                        <Card>
                            <View>
                                <Text style={styles.textStyle}>Name on the Card</Text>
                                <TextInput 
                                placeholder='Enter Card Name'
                                placeholderTextColor='rgba(0,0,0,0.2)'
                                style={styles.inputStyle}
                                underlineColorAndroid='rgba(255,255,255,0)'
                                />
                            </View>
                        </Card>

                        <View style={styles.sameLine}>
                            <Card2>
                                <View>
                                    <Text style={styles.textStyle}>Expiry Date</Text>
                                    <TextInput 
                                    placeholder='Enter Date'
                                    placeholderTextColor='rgba(0,0,0,0.2)'
                                    style={styles.inputStyle}
                                    underlineColorAndroid='rgba(255,255,255,0)'
                                    />
                                </View>
                            </Card2>
                            <Card2>
                                <View>
                                    <Text style={styles.textStyle}>CVV</Text>
                                    <TextInput 
                                    placeholder='Enter CVV'
                                    placeholderTextColor='rgba(0,0,0,0.2)'
                                    secureTextEntry
                                    style={styles.inputStyle}
                                    underlineColorAndroid='rgba(255,255,255,0)'
                                    />
                                </View>
                            </Card2>
                        </View>
                        <View style={styles.pinStyle}>
                            <Card2>
                                    <View>
                                    <Text style={styles.textStyle}>PIN</Text>
                                    <TextInput 
                                    placeholder='Enter Pin'
                                    placeholderTextColor='rgba(0,0,0,0.2)'
                                    secureTextEntry
                                    style={styles.inputStyle}
                                    underlineColorAndroid='rgba(255,255,255,0)'
                                    />
                                </View>
                            </Card2>
                        </View>
                        <Button2 onPress={this.onButtonPress.bind(this)}>
                            Confirm Payment
                        </Button2>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    inputStyle: {
        width: 350,
        paddingLeft: 0,
        paddingBottom: 0,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#f2960c'
    },
    textStyle: {
        fontSize: 22,
        fontWeight: '500',
        color: 'rgba(0,0,0,0.5)'
    },
    sameLine: {
       flexDirection: 'row'
    },
    pinStyle: {
        alignSelf: 'center'
    },
    headerStyle: {
        fontSize: 28,
        alignSelf: 'center',
        fontWeight: 'bold'
      },
      bodyStyle: {
        flex: 3.5,
        justifyContent: 'center',
        alignItems: 'center'
      }
});
