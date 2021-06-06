import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { colors } from '../../Helper'

export default class CButton extends Component {
    render() {
        const { onClick, label, color, isHide } = this.props
        return (
            <TouchableOpacity onPress={isHide ? null : onClick} style={styles.Button(color, isHide)}>
                <Text style={styles.Title(color)}>{label}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    Button: (color, isHide) => ({
        backgroundColor: color ? isHide ? 'gray' : color : 'white',
        padding: 7,
        borderRadius: 5,
        alignItems: 'center',
        flex: 1,
        borderColor: colors.border,
        borderWidth: 1,
        elevation: 3
    }),
    Title: (color) => ({ color: color ? 'white' : 'black', fontSize: 16, fontWeight: '700' }),
})
