import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import CBottomTab from '../../Components/CBottomTab'
import CPlainHeader from '../../Components/CPlainHeader'
import { colors, Height, Width } from '../../Helper'

class DetailProductScreen extends Component {
  render() {

    const { navigation, addCart } = this.props
    const { data } = this.props.route.params
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <CPlainHeader navigation={() => navigation.goBack()} title="Detail Product" />
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

        <CBottomTab onClickCart={() => {
          if (this.props.data.isLogin) {
            const finder = this.props.data.cart.findIndex(findId => findId.id == data.id)
            console.log(finder)

            if (finder != -1) {
              this.props.data.cart[finder].total = this.props.data.cart[finder].total + 1
              this.props.data.cart[finder] = {
                ...this.props.data.cart[finder],
                subTotal: this.props.data.cart[finder].total * this.props.data.cart[finder].price
              }

            } else {
              this.props.data.cart = [...this.props.data.cart, { ...data, total: 1, subTotal: data.price * 1 }]
            }

            this.props.addCart(this.props.data.cart)
            alert('Barang berhasil ditambahkan')
          } else {
            alert('Login Terlebih Dahulu')
          }
        }} onClickBuy={() => {
          if (this.props.data.isLogin) {
            navigation.navigate('ShippingScreen', { total: data.price })
          } else {
            alert('Login Terlebih Dahulu')
          }
        }} />

      </View>
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
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailProductScreen)
