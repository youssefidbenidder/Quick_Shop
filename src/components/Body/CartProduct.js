import React from 'react'
import {View,Image,Text,StyleSheet,ScrollView,TouchableOpacity} from "react-native";
import {Button} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux'

class CartProduct extends React.Component{
constructor(props)
{
    super();
    this.total=0;

}

 calculateTotal=() => {
    this.total= this.props.product.price * this.props.counter;
}


    render()
    {
        const prod = this.props.product;
        this.calculateTotal();
       // this.props.triggerParentUpdate(this.total);
        return (
            <TouchableOpacity
                style={styles.main_container}
            >
                <Image
                    style={styles.image}
                    resizeMode={'stretch'}
                    source={require("../../../images/prod4.jpg")}
                    //source={{uri: prod.image_path}}
                />
                <View style={{flex:2}}>
                    <View style={{flex:1}}>
                        <Text style={[styles.textStyle,{fontSize: 17}]}>{prod.name}</Text>
                        <Text style={[styles.textStyle,{fontSize: 13}]}> Price: ${prod.price}</Text>
                        <Text style={[styles.textStyle,{fontSize: 13}]}>Total: ${this.total}</Text>
                    </View>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <Icon name={'delete'} size={25} style={{color: 'gray'}}/>
                        <View style={{width: 100,flexDirection:'row', alignItems:'flex-end', justifyContent:'space-around',height:25, marginLeft:80}}>
                            <Button
                                onPress={() => this.props.increaseCounter()}
                                style={styles.buttonStyle}>
                                <Icon name={'plus'} size={20} style={{color: 'red'}}/>
                            </Button>
                            <Text style={{Color: 'gray',fontSize:17}}>{this.props.counter}</Text>
                            <Button
                               onPress={() => this.props.decreaseCounter()}
                                style={styles.buttonStyle}>
                                <Icon name={'minus'} size={20} style={{color: 'red', }}/>
                            </Button>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex:1,
        height: 200,
        width: 400,
        flexDirection: 'row',
    },
    buttonStyle: {
        backgroundColor:'white',
        borderColor:'gray',
        height:30,
        width:30,
        alignItems:'center',
        justifyContent:'center'
    },
    image: {
        flex:1,
       // width: 133,
       // height: 250,
        margin: 5,
       //resizeMode:'contain',
        backgroundColor: 'gray'
    },
   textStyle: {
       color: 'black',
       paddingTop: 8,
       fontFamily:'Montserrat-Regular'
    },

})
function mapStateToProps(state) {
    return {
        counter: state.counter,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
        decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartProduct)