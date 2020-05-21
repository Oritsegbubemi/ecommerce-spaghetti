import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Routes from './src/Routes';
import reducers from './src/reducers';

export default class App extends Component {
  componentDidMount() {
    // eslint-disable-next-line global-require
    const firebase = require('firebase');
    global.Symbol = require('core-js/es6/symbol');
    global.Symbol = require('core-js/fn/symbol/iterator');

    const config = {
      apiKey: 'AIzaSyDieaxno3EPrYPG-PWBjAwIih1NOHk5CMU',
      authDomain: 'spagetti-d3b08.firebaseapp.com',
      databaseURL: 'https://spagetti-d3b08.firebaseio.com',
      projectId: 'spagetti-d3b08',
      storageBucket: 'spagetti-d3b08.appspot.com',
      messagingSenderId: '1010093474254'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Routes />
        </View>
        </Provider>    
    );
  }
}

const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     backgroundColor: '#f2960c',
     paddingBottom: 10,
   }
});
