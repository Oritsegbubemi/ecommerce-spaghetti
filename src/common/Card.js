import React from 'react';
import { StyleSheet, View } from 'react-native'; 

const Card = ({ children }) => (
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
      marginTop: 30,
      marginLeft: 20,
      marginRight: 20,
      paddingHorizontal: 20,
      paddingVertical: 40,
      paddingBottom: 5,
  }
});

export { Card };
