import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const Header = ({ headerText, onBackPress, backButton, Exit }) => (
    <View style={styles.ViewStyle}>
        <TouchableOpacity onPress={onBackPress}>
            <Image
                 style={styles.imageStyle}
                 source={backButton} 
            />
        </TouchableOpacity>
        <View style={styles.container}>
            <Text style={styles.textStyle}>{headerText}</Text>
        </View>
        <TouchableOpacity>
            <Text>{Exit}</Text>
        </TouchableOpacity>
    </View>
    );

const styles = StyleSheet.create({
    ViewStyle: {
        backgroundColor: '#f2960c',
        //alignItems: 'center',
        height: 60,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        elevation: 2,
        //position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textStyle: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',  
    },
    imageStyle: {
        width: 30,
        height: 30
    }
});

export { Header };
