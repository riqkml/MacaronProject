import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { IOwner } from '../../Assets'
import CPlainHeader from '../../Components/CPlainHeader'
import TabView from '../../Components/TabView'
import { colors, Width } from '../../Helper'

class ProfileScreen extends Component {
    render() {

        return (
            <View style={{ flex: 1, backgroundColor: 'white', paddingBottom: 20 }}>
                <CPlainHeader navigation={() => this.props.navigation.goBack()} title="Profile Screen" />
                <ScrollView>
                    <View style={{ alignItems: 'center', marginVertical: 20, marginBottom: 0 }}>
                        <Image source={IOwner} style={{ width: Width * 0.4, height: Width * 0.4, borderRadius: Width / 2 }} />
                    </View>
                    <View style={{ height: 50 }} />
                    <TabView title="Username" label="Athia" />
                    <TabView title="Email" label="athia@gmail.com" />
                    <TabView title="Nomor HP" label="087759469363" />
                    <TabView title="Umur" label="22" />
                    <TabView title="Jenis Kelamin" label="Wanita" />
                    <TouchableOpacity style={{ backgroundColor: '#d63031', marginHorizontal: 60, alignItems: 'center', borderRadius: 20 }} onPress={() => {
                        this.props.login(false),
                            this.props.addCart([])
                        this.props.navigation.navigate('mainApp')
                    }}>
                        <Text style={{ fontSize: 20, color: 'white', paddingVertical: 7 }} > Logout</Text>
                    </TouchableOpacity>
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
        login: (value) => {
            dispatch({
                type: 'USER',
                data: value
            })
        },

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
