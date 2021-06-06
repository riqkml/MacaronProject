import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { colors } from '../../Helper'

export default class TabView extends Component {
    render() {
        const { title, label } = this.props
        return (
            <View style={{ paddingHorizontal: 20, paddingVertical: 5, backgroundColor: 'white', elevation: 5, marginBottom: 20 }}>
                <Text style={{ fontSize: 12, color: colors.labelSecondary, marginBottom: 10 }}>{title}</Text>
                <Text style={{ fontSize: 18, color: 'black' }}>{label}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
