import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'
import { colors } from '../../Helper';

export default class CTextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            border: 'black',
        };
    }
    render() {
        const { placeholder, onChangeText, title, value, secure } = this.props
        const { border } = this.state
        const onFocusForm = () => {
            this.setState({
                border: colors.primary,
            });
        };
        const onBlurForm = () => {
            this.setState({
                border: 'black',
            });
        };
        return (
            <View>
                <Text style={{ color: 'black', fontSize: 16, fontWeight: '400', marginBottom: 10 }}>{title}</Text>
                <TextInput
                    value={value}
                    placeholder={placeholder}
                    onBlur={onBlurForm}
                    onChangeText={onChangeText}
                    onFocus={onFocusForm}
                    style={styles.input(border)}
                    secureTextEntry={secure}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: (border) => ({
        borderColor: border,
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        borderWidth: 0.5,
        paddingLeft: 15,
        marginBottom: 5,
        borderRadius: 5,
    }),
})
