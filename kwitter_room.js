
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBUlZf_pYFeV21lwovW1E1fcuf2M-T0GlY",
    authDomain: "kwitter-78937.firebaseapp.com",
    databaseURL: "https://kwitter-78937-default-rtdb.firebaseio.com",
    projectId: "kwitter-78937",
    storageBucket: "kwitter-78937.appspot.com",
    messagingSenderId: "1043638556907",
    appId: "1:1043638556907:web:2b26e31206ce46f264c6ae"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
   

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
    room_name=document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location="kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="kwitter.html";
}

