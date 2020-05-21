import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native'; 
import { Router, Scene } from 'react-native-router-flux';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Payment from './pages/Payment';
import Menu from './pages/Menu';
import Order from './pages/Order';
import Delivery from './pages/Delivery';
import Reset from './pages/Reset';

export default class Routes extends Component {
  render() { 
    return (
      <View style={styles.container} >
        <Router>
          
            <Scene key='intro' hideNavBar >
              <Scene key='login' component={Login} title='Login' initial />
              <Scene key='signup' component={Signup} title='Signup' />
              <Scene key='menu' component={Menu} title='Menu' />
              <Scene key='delivery' component={Delivery} title='Delivery' />
              <Scene key='order' component={Order} title='Order' />
              <Scene key='payment' component={Payment} title='Payment' />
              <Scene key='resetpage' component={Reset} title='Reset' />
              
           
          </Scene>   
        </Router>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ff700a'
  }
});
