import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Header, Icon, Title, Button, Left, Body } from 'native-base';
import { Button2 } from '../common';
import icon from '../files/icon';

export default class Order extends Component {
    state = { 
        product: this.props.product, 
        price: this.props.price, 
        quantity: this.props.quantity, 
        del: 'plate' 
    };
   
    onAddButton() {
        this.setState({ 
            price: ((this.state.price) + (this.props.price)), 
            quantity: this.state.quantity + 1, 
            del: 'plates'
        });
    }
    onSubButton() {
        if (this.state.quantity <= 1) {
            this.setState({ 
                price: (this.state.price), 
                quantity: this.props.quantity, 
                del: 'plate'
            });
        } else {
 this.setState({ 
            price: ((this.state.price) - (this.props.price)), 
            quantity: this.state.quantity - 1, 
            del: 'plates'
        });
    }
    }
    onButtonPress() {
        const { price, product } = this.state;
        Actions.payment({ price, product });
    }
    onBackButtonPress() {
        Actions.menu();
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
                        <Title style={styles.headerStyle}>Order</Title>
                    </Body>
                </Header>
                <ScrollView>
                    <View style={styles.container}>
                    <View style={styles.displayView} >
                        <Image style={styles.imageStyle} source={icon[this.props.image]} />
                        <View>
                            <TouchableOpacity 
                            onPress={this.onSubButton.bind(this)} 
                            style={styles.addView} 
                            >
                                <Text style={styles.addText} >-</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                            onPress={this.onAddButton.bind(this)} 
                            style={styles.addView} 
                            >
                                <Text style={styles.addText} >+</Text>
                            </TouchableOpacity>
                        </View>
            
                    </View>
                        <View style={styles.container1}>
                            <Text style={styles.productStyle}>
                                {this.state.quantity} {this.state.del} of { this.props.product }
                            </Text> 
                            <Text style={styles.priceStyle}>N{ this.state.price }</Text>
                            <View style={styles.viewDetails}>
                                <Text style={styles.venueText}>Alien Hall</Text>
                                <Text style={styles.timeText}>1hr, 30 mins</Text>
                            </View>
                        </View>
                        <Button2 onPress={this.onButtonPress.bind(this)}>
                            Proceed to Checkout
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
        marginTop: 20,
    },
    container1: {
        justifyContent: 'space-around',
        padding: 15,
        alignItems: 'center',
    },
    imageStyle: {
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 2,
        width: 160, 
        height: 150
    },
    displayView: {
        flexDirection: 'row'
    },
    addView: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 7,
        padding: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'rgba(0,0,0,0.1)',
    },
    addText: {
        fontSize: 45,
        fontWeight: 'bold',
        color: '#f2960c'
    },
    productStyle: {
        fontSize: 25,
        color: 'rgba(0,0,0,0.6)',
        fontWeight: 'bold',
        paddingBottom: 12,
    },
    priceStyle: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#f2960c',
    },
    viewDetails: {
        paddingTop: 50,
    },
    venueText: {
        fontSize: 22,
        paddingBottom: 30,
        alignSelf: 'center'
    },
    timeText: {
        fontSize: 22,
        alignSelf: 'center'
    },
    headerStyle: {
        fontSize: 28,
        alignSelf: 'center',
        fontWeight: 'bold'
    },
      bodyStyle: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

