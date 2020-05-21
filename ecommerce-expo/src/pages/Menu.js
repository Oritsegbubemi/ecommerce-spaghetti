import React, { Component } from 'react';
import { StyleSheet, View, ListView, FlatList, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Header, Icon, Title, Button, Left, Body } from 'native-base';
import Details from './Details';

class Menu extends Component {
    componentDidMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(this.props.fReducer);
    }
    onButtonPress() {
        return Actions.order();
    }
    // eslint-disable-next-line react/sort-comp
    renderRow(library) {
        return <Details library={library} />;
    }
    onBackButtonPress() {
        Actions.login();
    }
    render() {
        return (
            <View>
                <Header style={{ backgroundColor: '#f2960c' }} > 
                    <Left>
                        <Button transparent onPress={this.onBackButtonPress.bind(this)}>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body style={styles.bodyStyle}>
                        <Title style={styles.headerStyle}>Menu</Title>
                    </Body>
                </Header>
                <ScrollView>
                    <View style={styles.container}>
                        <ListView 
                            dataSource={this.dataSource}
                            renderRow={this.renderRow}
                        />
                    </View>

                    <View style={styles.container}>
                        {/* <FlatList renderItem={}/> */}
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
      }
});

const mapStateToProps = state => ({ fReducer: state.fReducer });

export default connect(mapStateToProps, null)(Menu);
