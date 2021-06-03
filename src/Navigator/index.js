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
                    name="Chat"
                    component={TransactionScreen}
                    options={{
                        tabBarLabel: 'Transaction',
                        tabBarColor: '#D02760',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="book" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarColor: '#158041',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="account" color={color} size={26} />
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

                </Stack.Navigator>
            </>
        );
    }
}