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
  firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name")
room_name=localStorage.getItem("roomname")
function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value=""
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id)
console.log(message_data)
name1=message_data['name']
message=message_data['message']
likes=message_data['like']
name_with_tag="<h3> "+name1+"<img src='tick.png' class='user_tick'> </h3>"
message_with_tag="<h4 class='message_h4'> "+message+" </h4> "
like_button="<button id='"+firebase_message_id+"' class='btn btn-warning' value='"+likes+"' onclick='updatelike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'> Like : "+likes+" </span></button>"
row=name_with_tag+message_with_tag+like_button+span_with_tag
document.getElementById("output").innerHTML+=row

//End code
    } });  }); }
getData();


function updatelike(message_id){
    console.log(message_id)
    button_id=message_id
    like1=document.getElementById(button_id).value
    updatelikes=Number(like1)+1
    console.log(updatelikes)
    firebase.database().ref(room_name).child(message_id).update({
    like:updatelikes
    });
}
function logout(){
    localStorage.removeItem("user_name")
    localStorage.removeItem("roomname")
    window.location="index.html"
}