import React, {Component} from 'react';
import {
    createStackNavigator,
    createAppContainer,
    NavigationScreenProp as navigation,
    DrawerItems, createDrawerNavigator
} from 'react-navigation';

import HomeScreen from "../../Screens/HomeScreen";
import CartScreen  from '../../Screens/CartScreen';
import {Button} from "react-native-vector-icons/AntDesign";
import {Icon} from 'native-base';
import AppDrawerContainer from "../Header/header";
import {Image, SafeAreaView, ScrollView, View} from "react-native";
import OrdersScreen from "../../Screens/OrdersScreen";
import WishScreen from "../../Screens/WishScreen";
import SettingsScreen from "../../Screens/SettingsScreen";

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

const StackNavigator = createStackNavigator({
        Drawer: AppDrawerNavigator,
        navigationOptions: ({ navigation })=>({
            title :'QuickShop',

        }),
        Cart: {
            screen: CartScreen,
            navigationOptions: ({ navigation })=>({
                // title :'Cart',
                headerStyle: {
                    backgroundColor:'red',
                }
            }),
        },
    },
    {
        defaultNavigationOptions:({ navigation }) => {
            const { routeName } = navigation.state.routes[navigation.state.index];
            return {
                headerRight: (
                    <Icon name="md-cart"
                          size={30}
                          onPress={() => navigation.navigate('Cart')}
                          style={{color: 'white',marginRight:10}}
                    />
                ),
                headerLeft: (
                    <Icon
                        style={{paddingLeft: 10,color: 'white'}}
                        onPress={() => navigation.openDrawer()}
                        name='md-menu'
                        size={30}
                    />),
                headerTitle: routeName,
                headerStyle: {
                    backgroundColor: 'red',
                    borderWidth:0,

                },

            }
        }

    }


);
export default createAppContainer(StackNavigator);