import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator,
} from "react-navigation";
import Compte from "../pages/Compte";
import Accueil from "../pages/Accueil";
import Panier from "../pages/Panier";
import {Icon} from "react-native-elements";
import React from "react";
import CompteSwitchNavigatorContainer from "./CompteSwitchNavigator";
import AccueilNavigatorContainer from "./AccueilNavigator";
import {PanierNavigator} from "./PanierNavigator";
import CompteNavigatorContainer from "./CompteNavigator";
import ConnectionNavigatorContainer from "./ConnectionNavigator";
import EditProfile from "../pages/EditProfile";
import Inscription from "../pages/Inscription";
import Login from "../pages/Login";
import InscriptionCheckEmail from "../tests/InscriptionCheckEmail";
import CartScreen from "../Screens/CartScreen";
import AppDrawerContainer from "../components/Header/header";
import HomeScreen from "../Screens/HomeScreen";
import StackNavigator from "../components/navigation/Navigate";

const TabNavigator = createBottomTabNavigator(
    {
        Accueil: StackNavigator,
        Panier: CartScreen,
        Compte: CompteSwitchNavigatorContainer,
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                let iconName;
                if (routeName === 'Accueil') {
                    iconName = 'home';
                } else if (routeName === 'Panier') {
                    iconName = 'shopping-cart';
                } else if (routeName === 'Compte') {
                    iconName = 'person';
                }
                return <Icon name={iconName} size={25} color={tintColor}/>;

            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'black',
            style: {
                backgroundColor: "#eaf4f0",
                borderTopWidth: 0,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowOpacity: 0.31,
                shadowRadius: 4.11,
                elevation: 6,
            }
        },
    }
);


const stackNavigator = createStackNavigator({
        TabNavigator: {
            screen: TabNavigator,
            navigationOptions: {
                header: null,
            }
        },
        EditProfile: {
            screen: EditProfile,
            navigationOptions: {
                headerStyle: {
                    backgroundColor: "#000",
                },
                headerTitle: "Edit Compte",
                headerTitleStyle: {
                    color: "#fff",
                    fontSize: 16,
                    fontWeight: "normal"
                },
                headerTintColor: "#fff" ,
                headerRightStyle : { backgroundColor : '#fff'}
            }
        },
        Inscription: {
            screen: Inscription,
            navigationOptions: {
                header: null,
            }
        },
        Login: {
            screen: Login,
            navigationOptions: {
                header: null
            }
        },
        InscriptionCheckEmail: {
            screen: InscriptionCheckEmail,
            navigationOptions: {
                header: null,
            }
        },
    Drawer : StackNavigator,
    }
    , {
        initialRouteName: 'TabNavigator'
    }
);

const StackNavigatorContainer = createAppContainer(stackNavigator);
export default StackNavigatorContainer;