import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import * as actions from '../actions';
import { Button2, Card } from '../common';
import icon from '../files/icon';

class Details extends Component {
    state={ status: false, text: '' };
    onStatusChange() {
        const { price, product, image, quantity } = this.props.library;
        Actions.order({ product, price, image, quantity });
    }
    renderDescription() {
        const { product, price, image } = this.props.library;
        return (
            <Card>
                <View style={styles.disp}>
                    <Image 
                        style={styles.imageStyle}
                        source={icon[image]} 
                    />
                    <View style={styles.tagStyle}>
                        <Text style={styles.rest1}>{product}</Text>
                        <Text style={styles.rest}>N{price}</Text>
                        <View style={styles.buttonViewStyle}>
                            <Button2 onPress={this.onStatusChange.bind(this)}>
                                Place Order
                            </Button2>
                        </View>
                    </View>              
                </View> 
            </Card>   
         ); 
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderDescription()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    rest1: {
        fontSize: 20,
        paddingTop: 15,
        marginTop: 5,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    rest: {
        fontSize: 18,
        paddingTop: 15,
        marginTop: 2,
        textAlign: 'center'
    },
    buttonStyle: {
        backgroundColor: '#f2960c',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'flex-end',
        paddingHorizontal: 25,
        paddingVertical: 4,
        marginTop: 6,
        marginLeft: 5,
        marginRight: 5,
       },
     statustextStyle: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 10,
        color: '#fff',
       },
    imageStyle: {
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 2,
        width: 160, 
        height: 150
    },
    disp: {
        flexDirection: 'row',
    },
    tagStyle: {
        paddingLeft: 3,
    },
    buttonViewStyle: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    }
});

const mapStateToProps = state => ({ selectedLibraryId: state.selectedLibraryId });
export default connect(mapStateToProps, actions)(Details);
