import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { colors } from '../../Helper'
import { idrCurrency } from '../../Helper/Currency'

export default class CTransactionBox extends Component {
    render() {
        const { data,upload } = this.props

        return (
            <TouchableOpacity style={{ padding: 15, borderRadius: 10, backgroundColor: 'white', elevation: 5, marginTop: 20 }} onPress={upload}>
                <View style={{ marginVertical: 10, alignItems: 'flex-end', flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: colors.primary, fontSize: 16, fontWeight: 'bold' }}>No.Transaksi  1 </Text>
                    </View>
                    <View style={{ backgroundColor: data.status == 'PEMBAYARAN' ? '#d63031' : colors.primary, padding: 5 }}>
                        <Text style={{ color: 'white', fontSize: 12 }}>{data.status}</Text>
                    </View>
                </View>
                <Text style={{ color: colors.labelSecondary, fontSize: 14, marginTop: 10 }}>Detail Pembelian :</Text>
                {data.item.map((value, index) => {
                    return (
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                            <View style={{ flex: 7 }}>
                                <Text>{value.name}</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text>{value.total}</Text>
                            </View>
                            <View style={{ flex: 3, alignItems: 'flex-end' }}>
                                <Text style={{ fontWeight: 'bold' }}>{idrCurrency(value.subTotal)}</Text>
                            </View>
                        </View>
                    )
                })}

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>Total harga</Text>
                    <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>{idrCurrency(data.total)}</Text>
                </View>
                <Text style={{ color: colors.primary, fontSize: 12, marginTop: 10 }}>* Klik untuk Upload Bukti Pembayaran</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({})
