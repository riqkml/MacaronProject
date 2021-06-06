import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity,Image } from 'react-native'
import { colors } from '../../Helper'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { connect } from 'react-redux'

class UploadPhotoScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            img: '',
            isUpload: false
        }
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                   {this.state.isUpload == false ?  <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#bdc3c7', paddingHorizontal: 60, paddingVertical: 100 }} onPress={() => {
                        launchImageLibrary({}, response => {
                            if (response.didCancel || response.error) {
                                alert('Gagal mengupload')
                            } else {
                              const source = {uri: response.assets[0].uri};
                              this.setState({img: source,isUpload:true})

                              alert('Berhasil Upload')
                            }
                        })
                        }} >
                        <FontAwesome5 name={'upload'} size={45} color={colors.CIcon} />
                        <Text style={{ color: 'gray', fontWeight: 'bold', fontSize: 20 }}>Upload Photo</Text>
                    </TouchableOpacity> : 
                    <>
                    <Image source={this.state.img} style={{width: 200,height:200}}/>
                    <TouchableOpacity style={{backgroundColor:'#27ae60',padding: 20,marginTop: 20,paddingVertical: 5}} onPress={() => {
                        this.props.data.transaction[this.props.route.params.id].status = 'PROSES'
                        this.props.addTransaction(this.props.data.transaction)
                        this.props.navigation.navigate('mainApp')
                    }}>
                    <Text style={{color:'white',fontSize:16}}>Simpan Gambar</Text>
                    </TouchableOpacity>
                    </>
                    }

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
        addTransaction: (value) => {
            dispatch({
                type: 'ADD-TRANSACTION',
                data: value
            })
        },

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(UploadPhotoScreen)