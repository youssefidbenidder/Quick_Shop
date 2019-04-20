import React, {Component} from 'react';

import {Platform, StyleSheet, ScrollView, View, Image, AppRegistry, Text, TouchableOpacity} from 'react-native';
import {NavigationScreenProp as navigation} from "react-navigation";


export default class Categorie extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollCateg}>

                <TouchableOpacity
                    onPress={() => navigate('Cart')}
                    style={styles.MainContainer}>
                    <Image source={require("../../../images/accessoiresCateg.jpg")}
                           style={styles.img}/>
                    <Text>accessory</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.MainContainer}>
                    <Image source={require("../../../images/auto&motoCateg.jpg")}
                           style={styles.img}/>
                    <Text>auto & moto</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.MainContainer}>
                    <Image source={require("../../../images/beauty&ParfumCateg.jpg")}
                           style={styles.img}/>
                    <Text>beauty</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.MainContainer}>
                    <Image source={require("../../../images/bricolageCateg.jpg")}
                           style={styles.img}/>
                    <Text>tools</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.MainContainer}>
                    <Image source={require("../../../images/bébé&momCateg.jpg")}
                           style={styles.img}/>
                    <Text>mothers & kids</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.MainContainer}>
                    <Image source={require("../../../images/clothesShosesCateg.jpg")}
                           style={styles.img}/>
                    <Text>clothes & shoes</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.MainContainer}>
                    <Image source={require("../../../images/high-techCateg.jpg")}
                           style={styles.img}/>
                    <Text>high tech</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.MainContainer}>
                    <Image source={require("../../../images/lum&eclairageCateg.jpg")}
                           style={styles.img}/>
                    <Text>light & lighting</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create(
    {
        MainContainer:
            {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 5,
                paddingTop: (Platform.OS === 'ios') ? 20 : 0
            },
        scrollCateg:
            {
                flex: 1,

            },
        img:
            {
                width: 60,
                height: 60,
                borderRadius: 60 / 2
            }

    });
