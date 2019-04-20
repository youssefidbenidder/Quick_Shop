import React , { Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styles from "../styles/styles";

//Panier Test

export default class Panier extends React.Component<props>{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <View style={styles.container}>
                <Text>Welcome Panier ! </Text>
            </View>
        )
    }

}
