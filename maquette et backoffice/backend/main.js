// setting up firebase with our website
const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyCesjOlnPPYe0cnIfU68ZQe0Ac1iHfFoGM",
    authDomain: "xcellence-fe739.firebaseapp.com",
    projectId: "xcellence-fe739",
    storageBucket: "xcellence-fe739.appspot.com",
    messagingSenderId: "1028944422105",
    appId: "1:1028944422105:web:042979c50ebe8bf7d00ac8"
});
   const db = firebaseApp.firestore();
   const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    //firebase code 
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
        // Signed in 
       
        window.location.href='/indexdata.html'
        console.log(result)
    })

  .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}



const signIn = () =>{
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in 
    window.location.href='/indexx.html'
    console.log(result)
  })
  .catch((error) => {
    console.log(error.code);
            console.log(error.message)
  });


}

