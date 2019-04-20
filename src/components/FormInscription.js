import React, {Component} from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import RedButton from "../components/RedButton";
import Firebase from "../tests/Firebase";
import firebase from 'firebase';

export default class FormInscription extends Component<props> {

    constructor(props) {
        super(props);
        state = {
            userInput: "",
            emailInput: "",
            passInput: "",
            confirmPassInput: "",
            userError: "",
            emailError: "",
            passError: "",
            confirmPassError: ""
        }
    }

    validateEmail = (email) => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (typeof email === 'undefined' || email.trim() === "" || re.test(email)) {
            this.setState({emailError: ""})
        } else if (email.trim() !== '' && !re.test(email)) {
            this.setState({emailError: "Adresse e-mail invalide ."})
        }
    };

    validateUsername = (user) => {
        let hasNumber = /\d/;
        if (typeof user === 'undefined' || user.trim() === "") {
            this.setState({userError: ""})
        } else if (user.length < 8 || hasNumber.test(user)) {
            this.setState({userError: "Username doit contenir au moins 8 caractères non numeriques"})
        } else {
            this.setState({userError: ""})
        }
    };

    validatePass = (pass) => {
        let re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        if (typeof pass === 'undefined' || re.test(pass) || pass.trim() === "") {
            this.setState({passError: ""})
        } else if (!re.test(pass)) {
            this.setState({passError: "mot de pass doit contenir au moins 8 caractères dont est majuscule et un est numerique "})
        }
    };

    /*validateConfirmPass = (confirmPass) => {
        if (typeof confirmPass === 'undefined' || confirmPass.trim() === "" || confirmPass === this.state.passInput) {
            this.setState({confirmPassError: ""})
        } else if (confirmPass !== this.state.passInput) {
            this.setState({confirmPassError: "les mots de passe saisis ne correspondent pas"})
        }
    };*/

    finalValidation = () => {
        if (typeof this.state.userInput === 'undefined' || this.state.userInput.trim() === "" ||
            typeof this.state.emailInput === 'undefined' || this.state.emailInput.trim() === "" ||
            typeof this.state.passInput === 'undefined' || this.state.passInput.trim() === "" ||
            typeof this.state.confirmPassInput === 'undefined' || this.state.confirmPassInput.trim() === "") {
            alert("Merci de remplir tous les champs");
        } else if (this.state.passInput !== this.state.confirmPassInput) {
            this.setState({confirmPassError: "les mots de passe saisis ne correspondent pas"})
        } else if (this.state.userError !== "" || this.state.emailError !== "" ||
            this.state.passError !== "" || this.state.confirmPassError !== "") {
            alert("Merci d'entrer des informations correctes")
        } else {
            this.createUser(this.state);
        }
    };

    createUser = (state) => {
        let that = this;
        Firebase.secondaryApp.auth().createUserWithEmailAndPassword(state.emailInput, state.passInput).then(function () {
                let user = Firebase.secondaryApp.auth().currentUser;
                firebase.database().ref('users/' + user.uid).set({
                    username: state.userInput,
                    email: state.emailInput,
                });
                user.sendEmailVerification().then(function () {
                    // Email sent.
                    that.props.navigation.navigate('InscriptionCheckEmail');
                }).catch(function (error) {
                    // An error happened.
                });
            }
        ).catch(function (error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            //Erreur serveur ou réseau, Merci de réssayer.
            alert(errorMessage)
            // ...
        });
    };


    componentWillMount() {
        this.setState({
            userError: "",
            emailError: "",
            passError: "",
            confirmPassError: ""
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Icon
                        iconStyle={{marginTop: 10, marginRight: 8}}
                        name='person'
                    />
                    <View>
                        <TextInput
                            style={styles.input}
                            underlineColorAndroid={"#cfd8dc"}
                            placeholder={"Username"}
                            selectionColor={"#4fc3f7"}
                            onChangeText={(text) => this.setState({userInput: text})}
                            value={this.state.userInput}
                            onBlur={() => this.validateUsername(this.state.userInput)}
                        />
                        <Text style={styles.textError}>{this.state.userError}</Text>
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <Icon
                        iconStyle={{marginTop: 10, marginRight: 8}}
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
                        iconStyle={{marginTop: 10, marginRight: 8}}
                        name='lock'/>
                    <View>
                        <TextInput
                            disableFullscreenUI={true}
                            secureTextEntry={true}
                            style={styles.input}
                            underlineColorAndroid={"#cfd8dc"}
                            placeholder={"Mot de passe"}
                            selectionColor={"#4fc3f7"}
                            onChangeText={(text) => this.setState({passInput: text})}
                            value={this.state.passInput}
                            onBlur={() => this.validatePass(this.state.passInput)}
                        />
                        <Text style={styles.textError}>{this.state.passError}</Text>
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <Icon
                        iconStyle={{marginTop: 10, marginRight: 8}}
                        name='lock'/>
                    <View>
                        <TextInput
                            disableFullscreenUI={true}
                            secureTextEntry={true}
                            style={styles.input}
                            underlineColorAndroid={"#cfd8dc"}
                            placeholder={"Confirmer mot de passe !"}
                            selectionColor={"#4fc3f7"}
                            onChangeText={(text) => this.setState({confirmPassInput: text})}
                            value={this.state.confirmPassInput}
                        />
                        <Text style={styles.textError}>{this.state.confirmPassError}</Text>
                    </View>
                </View>
                <RedButton value={"CRÉER UN COMPTE"} action={() => this.finalValidation()}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#eaf4f0",
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        width: 270,
    },
    inputContainer: {
        flexDirection: "row",
    },
    textError: {
        color: "#d50000",
        fontSize: 12,
        width: 270,
    }
});