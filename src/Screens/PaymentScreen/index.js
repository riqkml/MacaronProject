import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import CTransactionBox from '../../Components/CTransactionBox'
import { launchImageLibrary } from 'react-native-image-picker';

class PaymentScreen extends Component {

    render() {
        const { data } = this.props
        return (
            <View style={{ flex: 1, padding: 20, backgroundColor: 'white' }}>
                <Text style={{ fontSize: 20 }}> Transaction History </Text>
                <View style={{ marginTop: 20 }}>
                    <ScrollView>
                        {data.transaction.map((value, index) => {
                            console.log(value.idOwner)
                            if (data.isLogin && value.idOwner == data.user.id) {
                                return (
                                    <CTransactionBox data={value} idx={index} upload={() => {
                                        value.status == 'PEMBAYARAN' ? this.props.navigation.navigate('UploadPhotoScreen', { id: index }) : alert('Pembelian Sedang Diproses')
                                    }} />
                                )
                            } else {
                                null
                            }
                        })}
                    </ScrollView>
                </View>
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
        },
        addTransaction: (value) => {
            dispatch({
                type: 'ADD-TRANSACTION',
                data: value
            })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentScreen)