import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import { connect } from 'react-redux';
import CButton from '../../Components/CButton';
import CPlainHeader from '../../Components/CPlainHeader'
import CTextInput from '../../Components/CTextInput'
import { colors } from '../../Helper';

class ShippingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nama: '',
            email: '',
            provinsi: '',
            kota: '',
            kelurahan: '',
            kodePos: '',
            telepon: '',
        };
    }
    render() {
        const { navigation, data, route } = this.props
        const { nama, email, provinsi, kota, kelurahan, kodePos, telepon } = this.state
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <CPlainHeader navigation={() => navigation.goBack()} title="Shipping Screen" />
                <ScrollView>
                    <View style={{ padding: 20 }}>
                        <CTextInput title='Name' placeholder="Masukkan Nama" value={nama} onChangeText={(e) => this.setState({ nama: e })} />
                        <CTextInput title='Email' placeholder="Masukkan Email" value={email} onChangeText={(e) => this.setState({ email: e })} />
                        <CTextInput title='Provinsi' placeholder="Masukkan Provinsi" value={provinsi} onChangeText={(e) => this.setState({ provinsi: e })} />
                        <CTextInput title='Kota' placeholder="Masukkan Kota" value={kota} onChangeText={(e) => this.setState({ kota: e })} />
                        <CTextInput title='Kelurahan' placeholder="Masukkan Kelurahan" value={kelurahan} onChangeText={(e) => this.setState({ kelurahan: e })} />
                        <CTextInput title='Kode Pos' placeholder="Masukkan Kode Pos" value={kodePos} onChangeText={(e) => this.setState({ kodePos: e })} />
                        <CTextInput title='Nomor Telepon' placeholder="Masukkan Nomor Telepon" value={telepon} onChangeText={(e) => this.setState({ telepon: e })} />
                        <View style={{ height: 20 }} />
                        <CButton label="Beli Sekarang" color={colors.primary} onClick={() => {
                            // if (nama == "" || email == "" || provinsi == "" || kota == "" || kelurahan == "" || kodePos == "" || telepon == "") {
                            //     alert('Tolong Masukkan data terlebih dahulu')
                            // } else {
                            let idTransaction = 0
                            if (data.transaction.length == 0) {
                                idTransaction = 1
                            } else {
                                const maxId = data.transaction.reduce(
                                    (max, transaction) => (transaction.id > max ? transaction.id : max),
                                    data.transaction[0].id
                                );
                                idTransaction = maxId + 1
                            }

                            const obj = {
                                id: idTransaction,
                                idOwner: data.user.id,
                                nama: nama,
                                email: email,
                                provinsi: provinsi,
                                kota: kota,
                                kelurahan: kelurahan,
                                kodePos: kodePos,
                                telepon: telepon,
                                item: [...data.cart],
                                total: route.params.total,
                                status: 'PEMBAYARAN'
                            }
                            this.props.addTransaction([...data.transaction, obj])
                            this.props.addCart([])
                            navigation.navigate('TransactionScreen', { transaction: obj })

                        }
                        } />
                    </View>
                </ScrollView>
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
export default connect(mapStateToProps, mapDispatchToProps)(ShippingScreen)