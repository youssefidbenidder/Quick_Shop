import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View,ScrollView,FlatList} from 'react-native';
import {Header, Content, Container, Input, Button, Icon, Right} from 'native-base';
import products from "../../helpers/productData";
import CartProduct from '../components/Body/CartProduct'
import {createStore} from "redux";
import { Provider } from 'react-redux';

const initialState = {
    counter: 1
};

const reducer = (state = initialState, action) => {


    switch (action.type) {
        case 'INCREASE_COUNTER':
            let newiCounter= state.counter + 1;
            return {
                ...state,
                counter:newiCounter }
        case 'DECREASE_COUNTER':
            let newdCounter= state.counter - 1;
            return { ...state,
            counter:newdCounter }
    }
    return state
};

const store = createStore(reducer);



export default class CartScreen extends Component {


    render() {
        return (
            <Container>
                <Content contentContainerStyle={styles.container}>
                    <ScrollView style={{top:10}}>
                        <FlatList

                            data={products}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({item}) => <Provider store={store}><CartProduct counter = {this.props.counter} product={item}/></Provider>}

                        />

                        <View style={{backgroundColor: '#edeff2',justifyContent: 'center',alignItems:'center' ,height:60, paddingLeft: 8
                           , flexDirection: 'row',margin:4}}>
                            <Text style={{marginLeft: 3,flex: 1,color: 'red', fontSize:14, fontFamily:'Montserrat-Regular'}}>
                                Coupon Code</Text>
                            <Input style={{margin: 3,flex:1,backgroundColor:'white', height:40,width:50,alignItems:'center'}}/>
                            <Button style={{top:6,margin: 3,padding:5,backgroundColor:'red',alignItems:'center',justifyContent: 'center',height:40}}>
                                <Text style={{color: 'white', backgroundColor:'red', fontSize:12, fontFamily:'Montserrat-Regular'}}>
                                    APPLAY</Text>
                            </Button>
                        </View>
                        <View style={{height:100}}>

                        </View>

                    </ScrollView>
                </Content>
            </Container>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
AppRegistry.registerComponent('CartScreen', ()=> CartScreen);