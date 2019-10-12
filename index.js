var firebase = require('firebase-admin');
(function() {

    //Initializing Firebase
    const config = {
        apiKey: "AIzaSyAx6-Uf6XelwwNdQ8uHxq8xunBB9QuEKDc",
        authDomain: "mhacks-project-15030.firebaseapp.com",
        databaseURL: "https://console.firebase.google.com/project/mhacks-project-15030/database/firestore/data~2F",
        storageBucket: "mhacks-project-15030",

    }),
    firebase.initializeApp(config);
    
    //Get elements
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignup = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogout');

    //Add login event
    btnLogin.addEventListener('click',e => {
        // Get email and pass
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        // Sign in
        const promise = auth.signInWithEmailAbdPassword(email,
            pass);
            promise.catch(e => console.log(e.getMessage));
        });

    // Add signup event
    btnLogin.addEventListener('click',e => {
        // Get email and pass
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        // Sign in
        const promise = auth.createUserWithEmailAbdPassword(email,
            pass);
            promise.catch(e => console.log(e.getMessage));
    })

    btnLogout.addEventListener('click', e=>{
        firebase.auth.signOut();
    });

    // Add a realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            console.log(firebaseUser);
        } else {
            console.log('not logged in');
            btnLogout.classList.add('hide');
        }
    })

}); 
