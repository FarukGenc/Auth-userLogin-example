import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyA5wvI9bwNpZbj94H9ST-TXkACJ5S9Yv2s",
    authDomain: "login-and-auth-app-with-react.firebaseapp.com",
    databaseURL: "https://login-and-auth-app-with-react.firebaseio.com",
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth