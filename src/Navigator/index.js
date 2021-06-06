import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import SplashScreen from '../Screens/SplashScreen';
import DashboardScreen from '../Screens/DashboardScreen';
import DetailProductScreen from '../Screens/DetailProductScreen';
import TransactionScreen from '../Screens/TransactionScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import { colors, Colors } from '../Helper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CartScreen from '../Screens/CartScreen';
import ShippingScreen from '../Screens/ShippingScreen';
import PaymentScreen from '../Screens/PaymentScreen';
import LoginScreen from '../Screens/LoginScreen';
import UploadPhotoScreen from '../Screens/UploadPhotoScreen';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const header = { headerShown: false };

export default class Router extends Component {

    MyTabs() {
        return (
            <Tab.Navigator
                initialRouteName="Dashboard"
                activeColor="#fff"
                shifting="true"
                barStyle={{ backgroundColor: colors.primary }}>
                <Tab.Screen
                    name="Dashboard"
                    component={DashboardScreen}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarColor: '#158041',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="home" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Payment"
                    component={PaymentScreen}
                    options={{
                        tabBarLabel: 'Transaction',
                        tabBarColor: '#158041',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="book" color={color} size={26} />
                        ),
                    }}
                />
            </Tab.Navigator>
        );
    }

    render() {

        return (
            <>
                <Stack.Navigator>

                    <Stack.Screen
                        name="Splash"
                        component={SplashScreen}
                        options={header}
                    />

                    <Stack.Screen
                        name="mainApp"
                        component={this.MyTabs}
                        options={header}
                    />

                    <Stack.Screen
                        name="DetailProduct"
                        component={DetailProductScreen}
                        options={header}
                    />

                    <Stack.Screen
                        name="CartScreen"
                        component={CartScreen}
                        options={header}
                    />

                    <Stack.Screen
                        name="ShippingScreen"
                        component={ShippingScreen}
                        options={header}
                    />

                    <Stack.Screen
                        name="TransactionScreen"
                        component={TransactionScreen}
                        options={header}
                    />

                    <Stack.Screen
                        name="LoginScreen"
                        component={LoginScreen}
                        options={header}
                    />

                    <Stack.Screen
                        name="ProfileScreen"
                        component={ProfileScreen}
                        options={header}
                    />

                    <Stack.Screen
                        name="UploadPhotoScreen"
                        component={UploadPhotoScreen}
                        options={header}
                    />
                </Stack.Navigator>
            </>
        );
    }
}