import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import CBottomTab from '../../Components/CBottomTab'
import CPlainHeader from '../../Components/CPlainHeader'
import { colors, Height, Width } from '../../Helper'

class DetailProductScreen extends Component {
    render() {
        const { navigation } = this.props
        const { data } = this.props.route.params
        console.log(data)
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <CPlainHeader navigation={navigation} />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View>

                        <Image source={data.image} style={{ width: Width, height: Width * 0.65, resizeMode: 'cover' }} />

                        <View style={{ padding: 20 }}>
                            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{data.price}</Text>
                            <Text style={{ fontSize: 20, color: colors.labelSecondary, marginTop: 10 }}>{data.name}</Text>
                            <Text style={{ fontSize: 16, color: colors.labelSecondary, marginTop: 10 }}>{`Stok Tersedia : ${data.stock}`}</Text>
                            <Text style={{ fontSize: 18, fontWeight: '700', marginTop: 10 }}>Deskripsi Produk</Text>
                            <Text style={{ fontSize: 14, marginTop: 10 }}>{data.desc}</Text>
                        </View>

                    </View>
                </ScrollView>

                <CBottomTab />

            </View>
        )
    }
}

const styles = StyleSheet.create({})

export default connect()(DetailProductScreen)
