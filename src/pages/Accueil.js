import React , { Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styles from "../styles/styles";
import mapStatetoProps from "../tests/testMapStateToStore";
import {connect} from "react-redux";

//Accueil (Catalogue) Test

class Accueil extends React.Component<props>{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <View style={styles.container}>
                <Text>Welcome Home ! </Text>
            </View>
        )
    }

}

export default connect(mapStatetoProps)(Accueil)