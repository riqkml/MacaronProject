import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { colors, Width } from '../../Helper';

export default class CPlainHeader extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
                <TouchableOpacity style={{ paddingHorizontal: 20, justifyContent: 'center', alignItems: 'center' }} onPress={() => this.props.navigation.goBack()}>
                    <FontAwesome5 name={'chevron-left'} size={25} color={colors.CIcon} />
                </TouchableOpacity>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginRight: Width * 0.15 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Detail Product</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
