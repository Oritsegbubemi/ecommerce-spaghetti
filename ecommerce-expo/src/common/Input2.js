import React from 'react';
import { TextInput, Image, View, StyleSheet } from 'react-native';
 
const Input2 = ({ value, onChangeText, source, placeholder }) => (
      <View style={styles.container}>
        <View style={styles.textBoxBtnHolder}>
          <TextInput 
            underlineColorAndroid="transparent" 
            style={styles.textBox}
            underlineColorAndroid='#1a67a2'
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            secureTextEntry
          />
          <View style={styles.visibilityBtn} >
            <Image 
              source={source}
              style={styles.btnImage} 
            />
        </View>
        </View>
      </View>
    );
 
const styles = StyleSheet.create(
{
  container:
  {
    justifyContent: 'center',  
  },
 
  textBoxBtnHolder:
  {
    position: 'relative',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
 
  textBox:
  {
    width: 300,
    paddingTop: 5,
    paddingBottom: 20,
    fontSize: 21,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,1)',
    alignItems: 'center',  
  },
 
  visibilityBtn:
  {
    position: 'absolute',
    right: 2,
    height: 30,
    width: 30,
    //padding: 5
  },
 
  btnImage:
  {
    resizeMode: 'contain',
    height: '100%',
    width: '100%'
  }
});

export { Input2 };
