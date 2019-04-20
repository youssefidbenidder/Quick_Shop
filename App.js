import React, {Component} from 'react';
import {View, StyleSheet,} from 'react-native';
import Firebase from "./src/tests/Firebase";
import StackNavigatorContainer from "./src/Navigations/Navigations.js";
import {Provider} from 'react-redux';
import Store from "./src/store/Store";
import StackNavigator from "./src/components/navigation/Navigate";

export default class App extends Component<Props> {


    componentWillMount() {
        Firebase.init();
    }

    render() {
        return (
            <Provider store={Store}>
                <View style={styles.container}>
                    <StackNavigatorContainer/>
                </View>
            </Provider>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e0f7fa",
        justifyContent: "center",
        //alignItems: "center",
        flex: 1,
    },
});
