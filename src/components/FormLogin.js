import React, {Component} from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
import {Icon, SocialIcon,} from 'react-native-elements';
import RedButton from "./RedButton";
import Firebase from "../tests/Firebase";

export default class FormLogin extends Component<props> {

    constructor(props) {
        super(props);
        this.state = {
            emailInput: "",
            passInput: "",
            emailError: ""
        }
    }

    componentWillMount() {
        this.setState({
            emailError: "",
        })
    }

    validateEmail = (email) => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (typeof email === 'undefined' || email.trim() === "" || re.test(email)) {
            this.setState({emailError: ""})
        } else if (email.trim() !== '' && !re.test(email)) {
            this.setState({emailError: "Adresse e-mail invalide ."})
        }
    };

    finalValidation = () => {
        if (typeof this.state.emailInput === 'undefined' || this.state.emailInput.trim() === ""
            || typeof this.state.passInput === 'undefined' || this.state.passInput.trim() === "") {
            alert("Merci d'entrer votre informations");
        } else {
            //const {navigation} = this.props.navigation ;
            this.connectUser();
            //this.redirectUser();
        }
    };

    connectUser = () => {
        let that = this;
        Firebase.auth.signInWithEmailAndPassword(this.state.emailInput, this.state.passInput)
            .then(() =>
                Firebase.auth.onAuthStateChanged(function (user) {
                    if (user) {
                        if (user.emailVerified === false) {
                            alert("Ce compte n'est pas encore verifié , Veuillez consulter vos e-mails " +
                                "pour verifiez votre compte.");
                            that.props.navigation.navigate("ConnectionNavigator");
                        } else {
                            that.redirectUser();
                        }
                        // User is signed in.
                    } else {
                        // No user is signed in.
                    }
                }))
            .catch(function (error) {
                // Handle Errors here.
                let errorCode = error.code;
                let errorMessage = error.message;
                alert(errorMessage);
                // ...
            });
    };


    redirectUser = () => {
        this.props.navigation.navigate("CompteNavigator");
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Icon
                        iconStyle={{marginTop: 16, marginRight: 8}}
                        name='mail'
                    />
                    <View>
                        <TextInput
                            style={styles.input}
                            underlineColorAndroid={"#cfd8dc"}
                            placeholder={"E-mail"}
                            selectionColor={"#4fc3f7"}
                            onChangeText={(text) => this.setState({emailInput: text})}
                            value={this.state.emailInput}
                            onBlur={() => this.validateEmail(this.state.emailInput)}
                        />
                        <Text style={styles.textError}>{this.state.emailError}</Text>
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <Icon
                        iconStyle={{marginTop: 16, marginRight: 8}}
                        name='lock'/>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        underlineColorAndroid={"#cfd8dc"}
                        placeholder={"Mot de passe"}
                        selectionColor={"#4fc3f7"}
                        onChangeText={(text) => this.setState({passInput: text})}
                        value={this.state.passInput}
                    />
                </View>
                <RedButton value={"SE CONNECTER"} action={() => this.finalValidation()}/>
                <Text style={styles.textBtn}>Mot de passe oublié?</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#eaf4f0",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    input: {
        width: 270,
    },
    inputContainer: {
        flexDirection: "row",
    },
    textBtn: {
        color: "#d50000",
        textDecorationLine: "underline",
        marginLeft: 'auto',
        marginTop: 15
    },
    textError: {
        color: "#d50000",
        fontSize: 12,
        width: 270,
    }
});