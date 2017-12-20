import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyA_TrqQDcWnG87vKcpk19HQD9XdVR7G5-E",
    authDomain: "turnout-4cc83.firebaseapp.com",
    databaseURL: "https://turnout-4cc83.firebaseio.com",
    projectId: "turnout-4cc83",
    storageBucket: "turnout-4cc83.appspot.com",
    messagingSenderId: "450408262064"
};

export const firebaseApp = firebase.initializeApp(config)

export const eventsRef = firebase.database().ref().child('events')
