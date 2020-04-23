import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'; 

const Button = ({ onPress, children }) => (
    <View style={styles.container}>
        <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>{children}</Text>
        </TouchableOpacity>
        </View>
    );

const styles = StyleSheet.create({
  buttonStyle: {
   backgroundColor: '#fff',
   borderRadius: 15,
   borderWidth: 1,
   borderColor: '#fff',
   alignItems: 'center',
   paddingHorizontal: 80,
   paddingVertical: 7,
   marginLeft: 5,
   marginRight: 5,
   marginBottom: 10
  },
  textStyle: {
      alignSelf: 'center',
      fontSize: 25,
      fontWeight: 'bold',
      paddingTop: 10,
      paddingBottom: 10,
      color: '#f2960c'
  },
  container: {
      paddingTop: 25,
  }
});

export { Button };
