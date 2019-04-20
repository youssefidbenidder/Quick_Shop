import {createStackNavigator , createAppContainer} from "react-navigation";
import Inscription from "../pages/Inscription";
import Login from "../pages/Login";
import InscriptionCheckEmail from "../tests/InscriptionCheckEmail";

const ConnectionNavigator = createStackNavigator({
        Inscription: {
            screen: Inscription,
            navigationOptions: {
                header: null,
            }
        },
        Login: {
            screen: Login,
            navigationOptions: {
                header: null
            }
        },
        InscriptionCheckEmail: {
            screen: InscriptionCheckEmail,
            navigationOptions: {
                header: null,
            }
        },
    },
);

const  ConnectionNavigatorContainer = createAppContainer(ConnectionNavigator);
export default ConnectionNavigatorContainer ;
