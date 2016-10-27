/**
 * Created by maleehafarukh on 9/22/16.
 */
//This file connects to the database and handles user authorization

(function () {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyB3gfMpNGEqW8J_OjQ72C1oa3LdicDY22A",
        authDomain: "recipebucket-fd6cb.firebaseapp.com",
        databaseURL: "https://recipebucket-fd6cb.firebaseio.com",
        storageBucket: "recipebucket-fd6cb.appspot.com",
        messagingSenderId: "206565604782"
    };
    firebase.initializeApp(config);
    var rootRef = firebase.database().ref();

    var storageRef = firebase.storage().ref();

    //Taking in user input
    var firstN= document.getElementById("firstName");
    var lastN= document.getElementById("lastName");
    var registerEmail= document.getElementById("email1");
    var registerPassword= document.getElementById("password1");
    var favFood= document.getElementById("favFood");
    var profilePicture=document.getElementById("profileImage").value;

    var entered_email=document.getElementById("email2");
    var entered_password=document.getElementById("password2");


    //If the user is trying to log in
    document.getElementById("Submit").addEventListener("click", function() { loginFunc();});
    function loginFunc() {

        const email=entered_email.value;
        const password=entered_password.value;

        const auth=firebase.auth();
        var loginPromise= auth.signInWithEmailAndPassword(email,password);
        loginPromise
            .catch(function (e) {
                console.log("Oops");
                console.log(e);
            })
    }

    //If the user is trying to register for a new account
    document.getElementById("Register").addEventListener("click", function() { registerFunc();});
    function registerFunc() {

        const email=registerEmail.value;
        const password=registerPassword.value;

        const auth=firebase.auth();
        const registerPromise= auth.createUserWithEmailAndPassword(email,password);
        registerPromise
            .catch(function (e) {
                console.log("Please enter all the required fields");
                console.log(e);
            });
    }


    //This is the part that determines whether or not to grant access to users
    firebase.auth().onAuthStateChanged(function(user) {

        //if the user hasn't typed anything, it doesn't automatically grant access
        if(entered_email.value!="") {
            if (user) {
                console.log("Access Granted");
                //When access is granted, redirect to the search page
                window.location.href = "search.html";
            }
            else {
                console.log("not logged in");
            }
        }
        else if(registerEmail.value!="") {
            if (user) {
                console.log("Access Granted");
                window.location.href = "search.html";
            }
            else {
                console.log("not logged in");
            }
        }
    });

    //storing user data to the database using set
    function writeUserData(fname, lname, email, pass) {

        //The username is the first part of the email
        var usrName= email.split("@",1);

        //The users will be listed by their user names
        //followed by their name, email, and password arranged in a set
        var fb= firebase.database().ref('users/' + usrName).set({
            firstName: fname,
            lastName: lname,
            email: email,
            password : pass
        });

        //Reading data from the database to say hi to the user
        var directory = "users/";
        var path = directory.concat(usrName);

        rootRef.child(path).once('value', function(userSnap) {
                console.log( userSnap.val().firstName);
                confirm("Hello ".concat(userSnap.val().firstName)+ ". Welcome to Recipe Bucket!");
        });

        //Reading data from the database to say hi to the user
        var starCountRef = firebase.database().ref('favFoods/');
        starCountRef.on('value', function(snapshot) {
            console.log( snapshot.getKey() + snapshot.val());
        });


        firebase.database().ref('favFoods/').push({  favFood: favFood.value});


        //Stores the user image into firebase
        storageRef.child('images/' + profilePicture).put(profilePicture ).then(function(snapshot) {
            console.log('Uploaded', snapshot.totalBytes, 'bytes.');
            var url = snapshot.metadata.downloadURLs[0];
            console.log('File available at', url);
            // [START_EXCLUDE]
            document.getElementById('linkbox').innerHTML = '<a href="' +  url + '">Click For File</a>';
            // [END_EXCLUDE]
        }).catch(function(error) {
            // [START onfailure]
            console.error('Upload failed:', error);
            // [END onfailure]
        });
        ref.put(profilePicture).then(function(snapshot) {
            console.log('Uploaded a blob or file!');
        });



    }

    //Clicking on the register button passes user data to the database
    $('#Register').click(function () {
        writeUserData(firstN.value,lastN.value, registerEmail.value, registerPassword.value);

    });

}());

