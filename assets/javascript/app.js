$(document).ready(function(){
var config = {
  apiKey: "AIzaSyBob15vJF-aHVOkIJ2eGf_E7kW7pe4mBCo",
  authDomain: "time-sheet-baa68.firebaseapp.com",
  databaseURL: "https://time-sheet-baa68.firebaseio.com",
  projectId: "time-sheet-baa68",
  storageBucket: "time-sheet-baa68.appspot.com",
  messagingSenderId: "969988699336"
};
firebase.initializeApp(config);
var database = firebase.database();
var name = "";
var role = "";
var startDate ="";
var monthlyRate =0;

$(".btn").on("click", function(event) {
  event.preventDefault();
  name = $("#employeeName")
    .val()
    .trim();
  role = $("#inputRole")
    .val()
    .trim();
  startDate = $("#inputStartDate")
    .val()
    .trim();
  monthlyRate = $("#inputMonthlyRate")
    .val()
    .trim();
    console.log(name);
});

database.ref().push({
  name: name,
  role: role,
  startDate: startDate,
  monthlyRate: monthlyRate,
});

database.ref().on("child_added", function (childSnapshot){
  console.log(childSnapshot.val());
  console.log(childSnapshot.val().name);
});
},

function (errorObject) {
  console.log("Errors handled: " + errorObject.code);
});