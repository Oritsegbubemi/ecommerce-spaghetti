import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'; 

const Button2 = ({ onPress, children }) => (
    <View style={styles.container}>
        <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>{children}</Text>
        </TouchableOpacity>
        </View>
    );

const styles = StyleSheet.create({
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
  textStyle: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
    color: '#fff',
  },
  container: {
      paddingTop: 25,
      alignItems: 'flex-end'
  }
});

export { Button2 };
