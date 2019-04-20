// Initialize Firebase
import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyBIjNqU2ZYC0fX8Y3QGuUkSNGvb3--dLf8",
    authDomain: "quichshop.firebaseapp.com",
    databaseURL: "https://quichshop.firebaseio.com",
    projectId: "quichshop",
    storageBucket: "quichshop.appspot.com",
    messagingSenderId: "646329478599"
};

export default class Firebase {

    static auth;
    static secondaryApp ;
    static database;
    static init(){
        firebase.initializeApp(config);
        Firebase.secondaryApp =  firebase.initializeApp(config, "Secondary");
        Firebase.auth = firebase.auth();
        Firebase.database = firebase.database();
    }

     static getUserData = () => {
        Firebase.auth.onAuthStateChanged(user => {
            Firebase.database.ref('users/'+user.uid).on('value', (snapshot) => {
                const userObj = snapshot.val();
                return userObj;
            })
        })
    }
}