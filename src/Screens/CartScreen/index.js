import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import CButton from '../../Components/CButton'
import CCartContent from '../../Components/CCartContent'
import CPlainHeader from '../../Components/CPlainHeader'
import { colors } from '../../Helper'
import { idrCurrency } from '../../Helper/Currency'

class CartScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subTotal: 0,
        };
    }

    render() {
        const { navigation, data, addCart } = this.props
        const subTotalNew = data.cart.reduce(function (total, currentValue) {
            return total + currentValue.subTotal;
        }, 0);
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <CPlainHeader navigation={() => navigation.goBack()} title="Cart Screen" />
                <View style={{ padding: 20, paddingBottom: 0, flex: 3 }}>
                    <Text style={{ fontSize: 20, color: 'black', marginTop: 2, fontWeight: 'bold', marginBottom: 10 }}>Rangkuman Belanja</Text>
                    <ScrollView>
                        {data.cart.map((value, index) => {
                            return (
                                <CCartContent data={value} subTotal={this.state.subTotal} setSubTotal={(e) => this.setState({ subTotal: e })} cart={data.cart} addCart={(e) => addCart(e)} idx={index} />
                            )
                        })}
                    </ScrollView>
                </View>
                <View style={{ flex: 2, padding: 20, borderTopWidth: 1, borderTopColor: 'grey' }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 16, color: 'black', marginTop: 2, marginBottom: 10 }}>Subtotal</Text>
                        <Text style={{ fontSize: 16, color: 'black', marginTop: 2, marginBottom: 10, fontWeight: 'bold' }}>{idrCurrency(subTotalNew)}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 16, color: 'black', marginTop: 2, marginBottom: 10 }}>Pajak</Text>
                        <Text style={{ fontSize: 16, color: 'black', marginTop: 2, marginBottom: 10, fontWeight: 'bold' }}>Rp 9.000</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 16, color: 'black', marginTop: 2, marginBottom: 10 }}>Biaya Pemesanan</Text>
                        <Text style={{ fontSize: 16, color: 'black', marginTop: 2, marginBottom: 10, fontWeight: 'bold' }}>Rp 12.000</Text>
                    </View>
                    <Text style={{ fontSize: 16, color: colors.labelSecondary, marginTop: 2 }}>Detail Pembayaran</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
                        <Text style={{ fontSize: 18, color: 'black', marginTop: 2, fontWeight: 'bold', marginBottom: 10 }}>Total (termasuk pajak)</Text>
                        <Text style={{ fontSize: 16, color: 'black', marginTop: 2, marginBottom: 10, fontWeight: 'bold' }}>{idrCurrency(subTotalNew + 9000 + 12000)}</Text>
                    </View>
                    <View style={{ height: 40 }}>
                        <CButton label="Beli Sekarang" color={colors.primary} onClick={() => {
                            navigation.navigate('ShippingScreen', { total: subTotalNew + 9000 + 12000 })

                        }} isHide={data.cart.length == 0 ? true : false} />
                    </View>
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({})
const mapStateToProps = (state) => {
    return {
        data: state.mainReducer
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addCart: (value) => {
            dispatch({
                type: 'ADD-CART',
                data: value
            })
        },

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartScreen)