// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, set, ref ,push, child, onValue} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCesjOlnPPYe0cnIfU68ZQe0Ac1iHfFoGM",
  authDomain: "xcellence-fe739.firebaseapp.com",
  databaseURL: "https://xcellence-fe739-default-rtdb.firebaseio.com",
  projectId: "xcellence-fe739",
  storageBucket: "xcellence-fe739.appspot.com",
  messagingSenderId: "1028944422105",
  appId: "1:1028944422105:web:042979c50ebe8bf7d00ac8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


submit.addEventListener('click',(e) => {
    var date = document.getElementById('date').value;  
    var nom = document.getElementById('nom').value;  
    var pays = document.getElementById('pays').value;  
    var lieu = document.getElementById('lieu').value; 
    var soldOut = document.getElementById('soldOut').value; 

    const userId = push(child(ref(database), 'users')).key;
   
    set(ref(database, 'users/' + userId), {
        date: date,
        nom: nom,
        pays : pays,
        lieu : lieu,
        soldOut : soldOut
   });
//    alert('saved');
  });


// const date =document.getElementById("date");
// const nom =document.getElementById("nom");
// const pays= document.getElementById("pays");
// const lieu =document.getElementById("lieu");
// const soldout= document.getElementById("soldOut");

// const addBtn =document.getElementById("addBtn");
// const updatedata =document.getElementById("updateData");

// const database = firebase.database();

// addbtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     database.ref('/users/' + id.value).set({
//         date:date.value,
//         nom:nom.value,
//         pays:pays.value,
//         lieu:lieu.value,
//         soldout:soldout.value
//     }
//     )
// })