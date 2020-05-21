import React, { Component } from 'react';
import { StyleSheet, View, ListView, FlatList, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Header, Icon, Title, Button, Left, Body } from 'native-base';
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons';
import Details from './Details';
import { Spinner } from '../common';

class Menu extends Component {
    //
    state = {
        loading: true
      }
    
      async componentDidMount() {
        await Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        })
        this.setState({ loading: false })
    }
    //

    renderRow({item}) {
        return <Details library = { item } />;
    }

    onButtonPress() {
        return Actions.order();
    }
    // eslint-disable-next-line react/sort-comp
    onBackButtonPress() {
        Actions.login();
    }

    render() {
        if (this.state.loading) {
            return (
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                  <Spinner size="large" />
              </View>
            );
        }
        return (
            <View>
                <Header style={{ backgroundColor: '#f2960c' }} > 
                    <Left>
                        <Button transparent onPress={this.onBackButtonPress.bind(this)}>
                            <Ionicons name='md-menu' style={styles.actionButtonIcon}/>
                        </Button>
                    </Left>
                    <Body style={styles.bodyStyle}>
                        <Title style={styles.headerStyle}>Menu</Title>
                    </Body>
                </Header>
                <ScrollView>
                    <View style={styles.container}>
                        <FlatList
                            data = {this.props.fReducer}
                            renderItem = {this.renderRow}
                        />
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
    },
    textStyle: {
        fontSize: 22,
        fontWeight: 'bold'
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
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
});

const mapStateToProps = state => ({ fReducer: state.fReducer });

export default connect(mapStateToProps, null)(Menu);
