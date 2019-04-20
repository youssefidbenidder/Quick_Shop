import {createAppContainer, createStackNavigator} from "react-navigation";
import Accueil from "../pages/Accueil";

const AccueilNavigator = createStackNavigator({
    Accueil : {
        screen : Accueil,
        navigationOptions : {
            header : null
        }
    }
},{
    initialRouteName : "Accueil"
});

const AccueilNavigatorContainer = createAppContainer(AccueilNavigator);
export default AccueilNavigatorContainer;