import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native'; 

const Spinner = ({ size }) => (
     <View style={styles.spinnerStyle}>
       <ActivityIndicator size={size || 'large'} />
    </View>
    );
const styles = StyleSheet.create({
  spinnerStyle: {
    backgroundColor: '#fff',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 80,
    paddingVertical: 17,
    marginLeft: 5,
    marginRight: 5,
  },
});

export { Spinner };
