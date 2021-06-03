import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import { Colors } from '../../Helper'

export default class SplashScreen extends Component {

    componentDidMount() {

        setTimeout(() => {
            this.props.navigation.navigate('mainApp')
        }, 3000);

    }

    render() {

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 24 }}>MACARON SHOP</Text>
                <Text style={{ fontSize: 18 }}>Food Carts and More</Text>
            </View>
        )

    }
}

const styles = StyleSheet.create({})
