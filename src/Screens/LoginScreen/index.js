import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import CButton from '../../Components/CButton'
import CTextInput from '../../Components/CTextInput'
import { colors } from '../../Helper'

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: ''
        };
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 15, justifyContent: 'center', paddingHorizontal: 60, marginTop: 40 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 40 }}> Login </Text>
                    <CTextInput title="Username" placeholder="Masukkan Username" value={this.state.user} onChangeText={(e) => this.setState({ user: e })} />
                    <CTextInput title="Password" placeholder="Masukkan Password" value={this.state.password} onChangeText={(e) => this.setState({ password: e })} secure />

                </View>
                <View style={{ flex: 1, paddingHorizontal: 60, marginBottom: 50 }}>
                    <CButton label="Login" color={colors.primary} onClick={() => {
                        if (this.state.user == this.props.data.user.id && this.state.password == this.props.data.user.pw) {
                            this.props.login(true)
                            this.props.navigation.navigate('mainApp')
                        } else {
                            alert('User yang dimasukkan salah')
                        }
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
        login: (value) => {
            dispatch({
                type: 'USER',
                data: value
            })
        },

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
