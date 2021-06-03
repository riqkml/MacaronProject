import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import { connect } from 'react-redux'
import { IBanner } from '../../Assets'
import CCatalog from '../../Components/CCatalog'
import CHeader from '../../Components/CHeader'
import { Width } from '../../Helper'

class DashboardScreen extends Component {
    render() {

        const { product } = this.props.data
        const { navigation } = this.props

        return (
            <View style={{ flex: 1 }}>
                <View>
                    <CHeader />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={IBanner} resizeMode={'cover'} style={{ width: Width * 0.85, height: Width * 0.5, borderRadius: 10 }} />
                </View>
                <CCatalog data={product} navigation={navigation} />

            </View>
        )
    }
}

const styles = StyleSheet.create({})

const mapStateToProps = (state) => {
    console.log('reducer', state)
    return {
        data: state.mainReducer.mainData
    };
};

export default connect(mapStateToProps)(DashboardScreen)