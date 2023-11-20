
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
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name -", Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function addRoom()
{
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
});
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.local = "kwitter_page.html";
}
function logout()  {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}
function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            meassage:msg,
            like:0
      });
      document.getElementById("msg").value ="";
}