import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Header, Title, Button, Left, Body } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

export default class Delivery extends Component {
    onBackButtonPress() {
        Actions.menu();
    }
    render() {
        return (
            <ScrollView style={styles.scroll}>
                <Header style={{ backgroundColor: '#f2960c' }} > 
                    <Left>
                        <Button transparent onPress={this.onBackButtonPress.bind(this)}>
                            <Ionicons name='md-arrow-back' style={styles.actionButtonIcon}/>
                        </Button>
                    </Left>
                    <Body style={styles.bodyStyle}>
                        <Title style={styles.headerStyle}>Delivery</Title>
                    </Body>
                </Header>
                <ScrollView style={styles.scroll}>
                    <View style={styles.container}>
                    <Image 
                        style={styles.imageStyle}
                        // eslint-disable-next-line global-require
                        source={require('../images/thumb/thumb2.jpg')} 
                    />
                        <View>
                            <Text style={styles.textStyle}>Your Order will be ready</Text>
                        </View>
                        <View style={styles.viewDetails}>
                            <View style={styles.viewVenue}>
                                <Text style={styles.venueAt}> at </Text>
                                <Text style={styles.venueText}>Alien Hall</Text>
                             </View>
                            <View style={styles.viewTime}>
                                <Text style={styles.timeIn}> In </Text>
                                <Text style={styles.timeText}>1hr, 30 mins</Text>
                            </View>
                        </View>
                        <View style={styles.footer}>
                            <Text style={styles.footer1}>Product: </Text> 
                            <Text style={styles.footer2}>{ this.props.product }</Text>
                        </View>
                        <View style={styles.footer}>
                            <Text style={styles.footer1}>Amount Paid: </Text> 
                            <Text style={styles.footer2}>N{ this.props.price }</Text>
                        </View>
                   </View>
                </ScrollView>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: '#fff'
    },
    container: {
        marginTop: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    textStyle: {
        fontSize: 28,
        color: 'rgba(0,0,0,1)',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewDetails: {
        marginTop: 40
    },
    viewVenue: {
        flexDirection: 'row',
        paddingBottom: 30, 
    },
    viewTime: {
        flexDirection: 'row',
        paddingBottom: 30, 
    },
    venueAt: {
        fontSize: 18,
        color: '#d85a11'
    },
    timeIn: {
        fontSize: 18,
        color: '#d85a11'
    },
    venueText: {
        fontSize: 20,
    },
    timeText: {
        fontSize: 20,
    },
    footer: {
        flexDirection: 'row',
        paddingBottom: 30,
    },
    footer1: {
        fontSize: 22,
    },
    footer2: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#f2960c',
    },
    imageStyle: {
        width: 160,
        height: 160,
        marginBottom: 20,
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
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
});
