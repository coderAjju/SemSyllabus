  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDn9bH7Sa0nUWJcln2e1vC_5VarURkhVRA",
    authDomain: "collectformdata-785ff.firebaseapp.com",
    projectId: "collectformdata-785ff",
    storageBucket: "collectformdata-785ff.appspot.com",
    messagingSenderId: "978418280265",
    appId: "1:978418280265:web:dfdc05fbd90c7d9ee61c98"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();


  //getting all the Objects of html
  let firstname = document.getElementById('firstname');
  let lastname = document.getElementById('lastname');
  let email = document.getElementById('email');
  let password = document.getElementById('password');


  //making a function for storing data
  window.signup = function(e){
    e.preventDefault();
    let obj = {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        password: password.value,
    }
    
    console.log(obj);
    createUserWithEmailAndPassword(auth,obj.email,obj.password)
    .then(function(success){
        alert("signup successfully")
        setTimeout(()=>{
          window.location.href = '../index.html';
        },1000)
    })
    .catch((err)=>{
        alert("error" + err)
    })
  }