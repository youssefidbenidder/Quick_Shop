/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, Text, View, SafeAreaView, ScrollView, Dimensions, Image, ImageBackground} from 'react-native';
import {createDrawerNavigator, createAppContainer,DrawerItems} from 'react-navigation';
import {Icon} from "native-base";

import HomeScreen from '../../Screens/HomeScreen';
import SettingsScreen from '../../Screens/SettingsScreen';
import OrdersScreen from '../../Screens/OrdersScreen';
import CartScreen from '../../Screens/CartScreen';
import WishScreen from '../../Screens/WishScreen';
const CustomDrawerComponent = (props) => (
    <SafeAreaView style={{flex:1}}>
        <View style={{height:150, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('../../../images/backgroundMenu.jpg')} style={{height:'100%', width: '100%'}} />
        </View>
        <ScrollView>
            <DrawerItems {...props}/>
        </ScrollView>
    </SafeAreaView>
);

const AppDrawerNavigator = createDrawerNavigator({
        QuickShop: {
            screen: HomeScreen,
            navigationOptions: {
                drawerLabel: 'Home',
                drawerIcon: (
                    <Icon name="md-home" size={24}/>
                ),
            },
        },

        'My Orders':
            {
                screen: OrdersScreen,
                navigationOptions: {
                    drawerIcon: (
                        <Icon name="list" size={24}/>
                    ),
                },
            },

        Cart:
            {
                screen: CartScreen,
                navigationOptions: {
                    drawerIcon: (
                        <Icon name="md-cart" size={24}/>
                    ),
                },

            },

        'Wish List':
            {
                screen: WishScreen,
                navigationOptions: {
                    drawerIcon: (
                        <Icon name="heart" size={24}/>
                    ),
                },

            },

        Settings:
            {
                screen: SettingsScreen,
                navigationOptions: {
                    drawerIcon: (
                        <Icon name="md-settings" size={24}/>
                    ),
                },

            },

    },

    {contentComponent: CustomDrawerComponent
    }

);
const   AppDrawerContainer= createAppContainer(AppDrawerNavigator);
export default  AppDrawerContainer;