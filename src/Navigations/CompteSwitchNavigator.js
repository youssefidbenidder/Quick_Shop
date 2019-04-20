import {createSwitchNavigator , createAppContainer} from "react-navigation";
import ConnectionMiddle from "../pages/ConnectionMiddle";
import Compte from "../pages/Compte";
import Connection from "../pages/Connection";

const CompteSwitchNavigator =  createSwitchNavigator({
    AuthLoading : ConnectionMiddle,
    ConnectionNavigator : Connection,
    CompteNavigator : Compte
    },
{
initialRouteName : 'AuthLoading'
}
);

const CompteSwitchNavigatorContainer = createAppContainer(CompteSwitchNavigator);

export default CompteSwitchNavigatorContainer;
    
