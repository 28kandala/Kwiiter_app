
const firebaseConfig = {
      apiKey: "AIzaSyAzOZQLeY9s1M5NwTckCkvcLXVnbfnnqXQ",
      authDomain: "kwitter-4ec4b.firebaseapp.com",
      databaseURL: "https://kwitter-4ec4b-default-rtdb.firebaseio.com",
      projectId: "kwitter-4ec4b",
      storageBucket: "kwitter-4ec4b.appspot.com",
      messagingSenderId: "442098379928",
      appId: "1:442098379928:web:d2ad026c59b31045c274ed"
    };
    firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+ room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      } });  }); }
getData();
