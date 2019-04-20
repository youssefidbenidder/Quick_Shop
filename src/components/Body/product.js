
import React, {Component} from 'react';
import {AppRegistry,View,Text, Image,StyleSheet} from 'react-native';
import {Header,Content, Container,Left, Input, Right,Item} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import product from '../../../helpers/productData'
import StarRating from 'react-native-star-rating'


export default class Product extends Component{

    render(){
const prod= this.props.product;
    return(
            <View style={{height:300, width:165, marginLeft:10,marginTop: 8, marginBottom:60}}>
                <View style={{flex:2}}>
                    <Image source={this.props.imageUri}
                           style={{height:null, width: null,
                               resizeMode: 'contain', flex:1}}
                    />
                    <Icon name={"hearto"} size={25} style={{color: 'gray', position: 'absolute', top: 10, right: 10 }}/>


                </View>
                <View style={{flex:1, alignItems:'center', paddingTop:8, color:'black'}}>
                    <Text style={{color: 'black', paddingTop: 8, fontFamily:'Montserrat-Regular', flexWrap: 'wrap'}}>{this.props.prodName}</Text>
                    <View style={{width:80,paddingTop:8}}>
                        <StarRating
                        disabled={true}
                        maxStars={5}
                        rating={this.props.rating}
                        starSize={12}
                        fullStarColor='orange'
                        emptyStarColor='gray'


                    />
                    </View>
                    <Text style={{color: 'black', paddingTop: 8, fontWeight: 'bold', fontSize: 17,fontFamily:'Montserrat-Regular'}}>{this.props.prodPrice}</Text>
                    <Text style={{color:'red', paddingTop: 8, marginBottom:8,fontFamily:'Montserrat-Regular'}}>ADD</Text>



                </View>
            </View>

        )
    }
}
const styles= StyleSheet.create({
    textStyle:{
        color: 'black',
        paddingTop: 8
    }
})

AppRegistry.registerComponent('Product', ()=> Product);