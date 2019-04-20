import {createStackNavigator} from "react-navigation";
import Panier from "../pages/Panier";

export const PanierNavigator = createStackNavigator({
    Panier : {
        screen : Panier,
        navigationOptions : {
            header : null
        }
    }
},{
    initialRouteName : "Panier"
});