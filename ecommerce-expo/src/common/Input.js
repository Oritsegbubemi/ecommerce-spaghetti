import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native'; 
import { Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

const Input = ({ onChangeText, value, placeholder, secureTextEntry, autoCorrect, name }) => (
        <View style={styles.container}>
            <TextInput 
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={autoCorrect}
                placeholderTextColor='rgba(255,255,255,0.9)'
                value={value}
                onChangeText={onChangeText}
                style={styles.inputStyle}
                underlineColorAndroid='rgba(255,255,255,1)'
            />
            <View style={styles.visibilityBtn} >
                <Ionicons 
                    name={name}
                    style={{ color: 'white' }}
                />
            </View>
        </View>
    );

const styles = StyleSheet.create({
  container: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 35,
      //marginBottom: 10,
      position: 'relative',
      alignSelf: 'stretch',
  },
  inputStyle: {
      width: 360,
      padding: 10,
      paddingBottom: 20,
      fontSize: 23,
      fontWeight: 'bold',
      color: 'rgba(255,255,255,0.9)'
  },
  visibilityBtn:
  {
    position: 'absolute',
    right: 2,
    height: 30,
    width: 30,
  }
});

export { Input };
