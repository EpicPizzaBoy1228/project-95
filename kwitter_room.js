var firebaseConfig = {
      apiKey: "AIzaSyAdO11ZdDJi9wqP5z3umsSyStpkbMGJPUQ",
      authDomain: "c-93-62245.firebaseapp.com",
      databaseURL: "https://c-93-62245-default-rtdb.firebaseio.com",
      projectId: "c-93-62245",
      storageBucket: "c-93-62245.appspot.com",
      messagingSenderId: "501012541828",
      appId: "1:501012541828:web:eaf2af7587439af0972dd1"
    };
    firebase.initializeApp(firebaseConfig);
    name = localStorage.getItem("user_name");
    document.getElementById("name").innerHTML = name;
    function addroom(){
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location = "kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class = 'room_name' id = " + Room_names + "onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>"
      document.getElementById("output").innerHTML = row;    
      //End code
      });});}
getData();
function logout(){
      window.location = "index.html";
}