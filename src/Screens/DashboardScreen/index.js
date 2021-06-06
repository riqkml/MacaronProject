import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { IBanner } from '../../Assets'
import CCatalog from '../../Components/CCatalog'
import CHeader from '../../Components/CHeader'
import { Width } from '../../Helper'

class DashboardScreen extends Component {

    _shuffle(array) {
        var currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }
    render() {

        const { product, isLogin } = this.props.data
        const { navigation } = this.props
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View>
                    <CHeader onRight={() => navigation.navigate('CartScreen')} onLogin={() => navigation.navigate('LoginScreen')} onProfile={() => navigation.navigate('ProfileScreen')} status={isLogin} />
                </View>
                <ScrollView>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={IBanner} resizeMode={'cover'} style={{ width: Width * 0.85, height: Width * 0.5, borderRadius: 10 }} />
                    </View>
                    <View style={{ height: 20 }} />
                    <CCatalog data={product} navigation={navigation} />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({})

const mapStateToProps = (state) => {
    console.log('reducer', state)
    return {
        data: state.mainReducer
    };
};

export default connect(mapStateToProps)(DashboardScreen)