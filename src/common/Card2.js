import React from 'react';
import { StyleSheet, View } from 'react-native'; 

const Card2 = ({ children }) => (
    <View style={styles.container}>
        {children}
    </View>
    );

const styles = StyleSheet.create({
  container: {
      paddingTop: 10,
      backgroundColor: '#fff',
      borderWidth: 1,
      borderRadius: 5,
      marginTop: 20,
      marginLeft: 20,
      marginRight: 20,
      paddingHorizontal: 20,
      paddingVertical: 5,
      paddingBottom: 2,
      paddingLeft: 10,
      paddingRight: 20,
      width: 165
  }
});

export { Card2 };
