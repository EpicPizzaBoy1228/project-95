user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
var firebaseConfig = {
      apiKey: "AIzaSyAdO11ZdDJi9wqP5z3umsSyStpkbMGJPUQ",
      authDomain: "c-93-62245.firebaseapp.com",
      databaseURL: "https://c-93-62245-default-rtdb.firebaseio.com",
      projectId: "c-93-62245",
      storageBucket: "c-93-62245.appspot.com",
      messagingSenderId: "501012541828",
      appId: "1:501012541828:web:eaf2af7587439af0972dd1"
    };
    function send(){
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0            
          });
      document.getElementById("msg").value = "";
    }
firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData; 
      //Start code
      console.log(firebase_message_id);
      console.log(message_data);
      name = message_data['name'];
      message = message_data['message'];
      like = message_data['like'];
      user ="<h4>"+name+"<img class = 'user_tick' src = 'tick.png'></h4>"
      text = "<h4 class='message_h4'>"+message+"</h4>"
      like_button = "<button class='btn btn-warning' id ="+firebase_message_id+"value = "+like+"onclick = 'updatelike(this.id)'>";
      span_tag = "<span class = glyphicon glyphicon-thumbs-up>Like:"+like+"</span></button><hr>";
      row = user + text + like_button + span_tag;
      document.getElementById("output").innerHTML += row
      //End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}