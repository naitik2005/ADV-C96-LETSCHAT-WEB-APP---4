const firebaseConfig = {
  apiKey: "AIzaSyBbJ7iQjVQtq__F036eVCbs0dY20Pp5SS0",
  authDomain: "let-schatwebapp-97b23.firebaseapp.com",
  databaseURL: "https://let-schatwebapp-97b23-default-rtdb.firebaseio.com",
  projectId: "let-schatwebapp-97b23",
  storageBucket: "let-schatwebapp-97b23.appspot.com",
  messagingSenderId: "838819581559",
  appId: "1:838819581559:web:8c0fe81b8106ac5a018072"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");

room_name = localStorage.getItem("room_name");

document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "addding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log("Room Name - " + Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
  document.getElementById("output").innerHTML += row;
  //End code
  });});}
getData();


function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}