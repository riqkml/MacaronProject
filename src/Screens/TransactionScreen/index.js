import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { IBank } from '../../Assets'
import CButton from '../../Components/CButton'
import { colors, Width } from '../../Helper'
import { idrCurrency } from '../../Helper/Currency'
import Clipboard from '@react-native-clipboard/clipboard';
class TransactionScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            copiedText: ''
        }
    }
    render() {
        const { navigation, data, route } = this.props
        console.log(route)
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 13, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 22, color: 'black', fontWeight: 'bold', marginBottom: 30 }}>Pesanan Dibuat</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingLeft: Width * 0.04 }}>
                        <View style={{ flex: 3 }}>
                            <Text style={{ fontSize: 20, color: colors.labelSecondary, }}>Jumlah Tagihan</Text>
                            <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', marginBottom: 20 }}>{idrCurrency(route.params.transaction.total)}</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={async () => {

                                Clipboard.setString(JSON.stringify(route.params.transaction.total))
                                const text = await Clipboard.getString();
                                this.setState({ copiedText: text })

                            }}>
                                <Text style={{ fontSize: 20, color: '#1AAE9F', fontWeight: 'bold' }}>Salin</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={{ fontSize: 16, color: 'black', }}>Transfer dapat dilakukan ke rekening tujuan</Text>
                    <Text style={{ fontSize: 16, color: 'black', }}> a.n Athia Suci Faqiha</Text>
                    <Image source={IBank} style={{ width: Width * 0.5, height: Width * 0.3, resizeMode: 'contain' }} />
                    <Text style={{ fontSize: 18, color: colors.labelSecondary, fontSize: 20, marginBottom: 5 }}>Bank Mandiri, Jakarta, a.n</Text>
                    <Text style={{ fontSize: 14, color: "black", fontSize: 20, marginBottom: 10 }}>Athia Suci Faqiha</Text>
                    <Text style={{ fontSize: 20, color: "black", fontSize: 20, marginBottom: 10, fontWeight: 'bold' }}>1400 019 157 693</Text>
                    <TouchableOpacity onPress={async () => {

                        Clipboard.setString('1400019157693')
                        const text = await Clipboard.getString();
                        this.setState({ copiedText: text })

                    }}>
                        <Text style={{ fontSize: 20, color: '#1AAE9F', fontWeight: 'bold', marginBottom: 20 }}>Salin</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 16, color: 'black', marginBottom: 20 }}>Pesananmu dicatat dengan nomor order #MACARON1</Text>
                    <Text style={{ fontSize: 16, color: 'black', }}>Jika Transaksi tidak diproses, dana akan dikembalikan 100%</Text>

                </View>
                <View style={{ flex: 1, padding: 20 }}>
                    <CButton label="Lanjutkan Belanja" color={colors.primary} onClick={() => {
                        navigation.navigate('mainApp')
                    }} />
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

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(TransactionScreen)