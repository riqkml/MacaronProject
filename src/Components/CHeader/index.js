import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { colors } from '../../Helper';

export default class CHeader extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                <View style={{ flex: 1, flexDirection: 'row', borderWidth: 0.5, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15, borderRadius: 5, borderColor: colors.CIcon, marginRight: 25 }}>
                    <FontAwesome5 name={'search'} size={20} color={colors.CIcon} style={{ marginRight: 10 }} />

                    <TextInput placeholderTextColor={colors.CIcon} placeholder={'Cari Macaron Apa?'} style={{ flex: 1 }} />
                </View>
                <View>
                    <FontAwesome5 name={'shopping-cart'} size={25} color={colors.CIcon} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
