import {createAppContainer, createStackNavigator} from "react-navigation";
import EditProfile from "../pages/EditProfile";
import Compte from "../pages/Compte";

const CompteNavigator = createStackNavigator({
        EditProfile: {
            screen: EditProfile,
            navigationOptions: {
                headerStyle: {
                    backgroundColor: "#000",
                },
                headerTitle: "Edit Compte",
                headerTitleStyle: {
                    color: "#fff",
                    fontSize: 16,
                    fontWeight: "normal"
                },
                headerTintColor: "#fff"
            }
        },
    },

);

const CompteNavigatorContainer = createAppContainer(CompteNavigator);
export default CompteNavigatorContainer;