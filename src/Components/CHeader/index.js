import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { colors } from '../../Helper';

export default class CHeader extends Component {
    render() {
        const { onRight, onLogin, status, onProfile } = this.props
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                <View style={{ flex: 1, flexDirection: 'row', borderWidth: 0.5, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15, borderRadius: 5, borderColor: colors.CIcon, marginRight: 25 }}>
                    <FontAwesome5 name={'search'} size={20} color={colors.CIcon} style={{ marginRight: 10 }} />
                    <TextInput placeholderTextColor={colors.CIcon} placeholder={'Cari Macaroon Apa?'} style={{ flex: 1 }} />
                </View>
                <TouchableOpacity onPress={onRight}>
                    <FontAwesome5 name={'shopping-cart'} size={25} color={colors.CIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={status ? onProfile : onLogin} style={{ marginLeft: 20 }}>
                    <FontAwesome5 name={status ? 'user-cog' : 'sign-in-alt'} size={25} color={colors.CIcon} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
