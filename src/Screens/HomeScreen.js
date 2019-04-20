import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View,ScrollView,Navigator} from 'react-native';
import {Header,Content, Container,Left, Input, Right, Icon,Item} from 'native-base';
import Album from '../components/Body/Album'
import Categorie from '../components/Body/Categorie'
import Product from '../components/Body/product'


export default class HomeScreen extends Component {
    static navigationOptions = {
        // headerTitle instead of title
        title: 'Home',
        headerTitle: <Icon
            style={{ paddingLeft: 10 }}
            name="md-menu"
            size={30}
        />,
    };
    render() {
        return (
            <Container>
                <Header>
                    <View style={{flex:1,position:'absolute', left:0, right:0,height:70,
                        backgroundColor: 'red',paddingHorizontal:5,borderWidth: 0}}>


                        <View style={{flex:1,height:"100%",marginLeft:5, justifyContent:'center'}}>
                            <Item style={{backgroundColor:'white', paddingHorizontal:10,
                                borderRadius: 15}}>
                                <Icon name="search" style={{fontSize:20,paddingTop:5}}/>
                                <Input placeholder="Search" />
                            </Item>
                        </View>
                    </View>
                </Header>
                <Content>
                    <ScrollView style={{marginTop:20}}>
                    <View style={styles.container}>
                       <Album style ={styles.album}/>
                    </View>
                    <Categorie navigation={this.props.navigation}/>
                    <View style={{backgroundColor: '#edeff2', height:60, paddingLeft: 8,
                        paddingTop:15}}>
                        <Text style={{color: 'red', fontSize:19, fontFamily:'Montserrat-Regular'}}>
                            Featured Products</Text>
                    </View>

                        <View style={{flexDirection: 'row'}}>
                        <Product
                            style={{marginBottom:10}}
                            imageUri={require("../../images/prod1.jpg")}
                            prodName={"The First Product"}
                            rating={2}
                            prodPrice={"$10.00"}/>
                        <Product
                            style={{marginBottom:10}}
                            imageUri={require("../../images/prod2.jpg")}
                            prodName={"The Second Product"}
                            rating={4.5}
                            prodPrice={"$105.00"}
                        />

                    </View>
                        <View style={{flexDirection: 'row'}}>
                            <Product
                                style={{marginBottom:10}}
                                imageUri={require("../../images/prod3.jpg")}
                                prodName={"The First Product"}
                                rating={2}
                                prodPrice={"$13.00"}/>
                            <Product
                                style={{marginBottom:10}}
                                imageUri={require("../../images/prod4.jpg")}
                                prodName={"The fourth Product"}
                                rating={4}
                                prodPrice={"$49.80"}
                            />

                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Product
                                style={{marginBottom:10}}
                                imageUri={require("../../images/prod5.jpg")}
                                prodName={"The fifth Product"}
                                rating={3}
                                prodPrice={"$20.00"}/>
                            <Product
                                style={{marginBottom:10}}
                                imageUri={require("../../images/prod6.jpg")}
                                prodName={"The Sixth Product"}
                                rating={1.5}
                                prodPrice={"$45.00"}
                            />

                        </View>

                        <View>
                            <Text style={{marginBottom:10}}>hello world</Text>
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
        borderRadius: 4,
        borderWidth: 0,
       // borderColor: '#d6d7da',
        height: 150,
       // backgroundColor: 'black'

    },
    album: {
        flex:1,
      height:'100%',
      width:'100%',
        position:'absolute',

    },
    Brand: {
        flex: 1,
        fontSize: 19,
        fontWeight: 'bold',
        color:'white',
       // marginRight: 100
    },
    headerBar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 8,
        backgroundColor:'red',
        borderWidth: 0
       // marginRight: 50
    }
});
