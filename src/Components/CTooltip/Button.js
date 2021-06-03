import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



const Button = ({ wrapperStyle, style, ...rest }) => (
    <View style={[styles.button, wrapperStyle]}>
        <Text style={[styles.buttonText, style]} {...rest} />
    </View>
);

export default Button;

const styles = StyleSheet.create({
    button: {
        padding: 10,
        backgroundColor: 'yellow'
    },
    buttonText: {
        color: '#27ae60',
    },
})
