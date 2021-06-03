import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { colors } from '../../Helper'
import CButton from '../CButton'

export default class CBottomTab extends Component {
    render() {
        const { onClickCart, onClickBuy } = this.props
        return (
            <View style={{ padding: 20, flexDirection: 'row', }}>
                <CButton label="Add Cart" onClick={onClickCart} />
                <View style={{ width: 25 }} />
                <CButton label="Buy Now" color={colors.primary} onClick={onClickBuy} />
            </View>
        )
    }
}

const styles = StyleSheet.create({})
