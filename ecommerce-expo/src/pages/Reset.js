import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Header, Icon, Title, Button, Left, Body } from 'native-base';
import { emailChanged } from '../actions/LoginAction';
import { Button2, Spinner } from '../common';

class Reset extends Component {
  onEmailChange(text) {
      this.props.emailChanged(text);
  }

  onBackButtonPress() {
    Actions.login();
  }

  onButtonPress() {
    // eslint-disable-next-line global-require
    const firebase = require('firebase');
    global.Symbol = require('core-js/es6/symbol');
    global.Symbol = require('core-js/fn/symbol/iterator');

    const auth = firebase.auth();
    const emailAddress = this.props.email;
    auth.sendPasswordResetEmail(emailAddress)
    .then(() => Actions.login())
    .catch(() => Actions.login());
  }

  renderButton() {
      if (this.props.loading) {
          return <Spinner size="large" />;
      }
      return (
          <Button2 onPress={this.onButtonPress.bind(this)}>
              Enter
          </Button2>
      );
  }
  render() {
    return (
      <View>
         <Header 
         androidStatusBarColor='#726549'
         style={{ backgroundColor: '#f2960c' }} 
         > 
           <Left>
              <Button transparent onPress={this.onBackButtonPress.bind(this)}>
                <Icon name='arrow-back' />
              </Button>
           </Left>
           <Body style={styles.bodyStyle}>
           <Title style={styles.headerStyle}>Reset Password</Title>
         </Body>
         </Header>
        <View style={styles.main}>
          <View style={styles.entryStyle}>
            <TextInput 
              value={this.props.email}
              placeholder="Email"
              onChangeText={this.onEmailChange.bind(this)}
              keyboardType='email-address'
              //autoFocus
              placeholderTextColor='rgba(0,0,0,0.2)'
              style={styles.inputStyle}
              underlineColorAndroid='rgba(0,0,0,1)'
            />
          </View>
          <View>
              {this.renderButton()}
          </View>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    //flex: 1
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  entryStyle: {
    padding: 8,
    marginTop: 20
  },
  inputStyle: {
    width: 360,
    padding: 10,
    paddingBottom: 20,
    fontSize: 23,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.9)'
  },
  headerStyle: {
    fontSize: 28,
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  bodyStyle: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const mapStateToProps = state => ({
      email: state.auth.email,
      loading: state.auth.loading
  });

export default connect(mapStateToProps, { 
  emailChanged, 
  })(Reset);

