var firebaseConfig = {
    apiKey: "AIzaSyDNRwghUwsAtoM-oCcF4XCcUlddrDz3xQU",
    authDomain: "doctor-and-patient-chata-f3ce6.firebaseapp.com",
    databaseURL: "https://doctor-and-patient-chata-f3ce6.firebaseio.com",
    projectId: "doctor-and-patient-chata-f3ce6",
    storageBucket: "doctor-and-patient-chata-f3ce6.appspot.com",
    messagingSenderId: "714182675333",
    appId: "1:714182675333:web:1f9926065e8fb3410692ec",
    measurementId: "G-CNF23BX1ME"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  username=localStorage.getItem("user_name")
  document.getElementById("user_name").innerHTML="Welcome "+username

function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("roomname", room_name)
      window.location="kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log(Room_names)
      console.log("room name = "+Room_names)
      row="<div class='room_name' id='"+Room_names+"' onclick='redirecttoroom(this.id)'>#"+Room_names+" </div> <hr>"
      document.getElementById("output").innerHTML+=row
      //Start code

      //End code
      });});}
getData();
function redirecttoroom(name){
      console.log(name)
      localStorage.setItem("roomname", name)
      window.location="kwitter_page.html"
}
function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("roomname")
      window.location="index.html"
}