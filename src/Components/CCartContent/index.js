import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Alert } from 'react-native'
import { IProduct1 } from '../../Assets'
import { colors, Width } from '../../Helper'
import Counter from "react-native-counters";
import { idrCurrency } from '../../Helper/Currency';
export default class CCartContent extends Component {
    onChange(number, type) {
        const item = this.props.cart.findIndex(finder => finder.id == this.props.data.id)
        if (number == 0) {
            this.props.cart.splice(item, 1)
            this.props.addCart(this.props.cart)
        } else {
            if (item != -1) {
                this.props.cart[item].total = number
                this.props.cart[item].subTotal = number * this.props.cart[item].price
                this.props.addCart(this.props.cart)
                this.props.setSubTotal(this.props.subTotal + this.props.cart[item].subTotal)

            } else {
                null
            }
        }
    }
    render() {
        const { data, cart, addCart, idx, subTotal, setSubTotal } = this.props
        const item = this.props.cart.findIndex(finder => finder.id == this.props.data.id)
        return (
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                <View>
                    <Image source={data.image} style={{ width: Width * 0.3, height: Width * 0.3 }} />
                </View>
                <View style={{ marginLeft: Width * 0.05, maxWidth: Width * 0.55 }}>
                    <Text style={{ fontSize: 18, color: 'black', marginTop: 2, }} numberOfLines={1}>{data.name}</Text>
                    <Text style={{ fontSize: 12, color: colors.labelSecondary, marginTop: 2 }}>Macaron Manis</Text>
                    <Text style={{ fontSize: 22, color: 'black', marginTop: 2, fontWeight: 'bold', marginBottom: 10 }}>{idrCurrency(data.subTotal)}</Text>
                    <Counter start={this.props.cart[item].total} onChange={this.onChange.bind(this)} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
