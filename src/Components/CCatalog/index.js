import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import { IProduct1 } from '../../Assets'
import { colors, Width } from '../../Helper'

export default class CCatalog extends Component {

    render() {

        const { data, navigation } = this.props

        return (
            <View style={{ marginTop: 10 }}>

                <Text style={{ marginLeft: 20, fontSize: 18, fontWeight: 'bold' }}>List Makaron </Text>
                <View style={{ marginTop: 15, flexDirection: 'row' }}>

                    <ScrollView style={{ flex: 1 }} horizontal showsHorizontalScrollIndicator={false}>
                        <View style={{ width: 20 }} />
                        {data.map((value, index) => {

                            return (

                                <TouchableOpacity style={{ maxWidth: Width * 0.4, borderColor: colors.border, borderWidth: 0, elevation: 0.5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginLeft: index == 0 ? 0 : 10 }} onPress={() => navigation.navigate('DetailProduct', { data: value })}>

                                    <Image source={value.image} style={{ width: Width * 0.4, height: Width * 0.3, resizeMode: 'cover', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />

                                    <View style={{ padding: 5, paddingHorizontal: 10 }}>
                                        <Text numberOfLines={2} style={{ fontSize: 12, marginTop: 5 }}>{value.name}</Text>
                                        <Text style={{ fontSize: 12, color: colors.labelSecondary, marginTop: 2 }}>{`Stok tersedia : ${value.stock}`}</Text>
                                        <Text style={{ fontWeight: 'bold', fontSize: 16, marginTop: 2 }}>{value.price}</Text>
                                    </View>

                                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, paddingBottom: 5, }}>
                                        <Text style={{ color: colors.labelSecondary }}>See detail</Text>
                                    </View>

                                </TouchableOpacity>

                            )

                        })}

                    </ScrollView>

                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({})
