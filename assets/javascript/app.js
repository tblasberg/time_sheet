$(document).ready();
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

$(document).on("click", "button", function() {
  name = $("#employeeName")
    .val()
    .trim();
  role = $("#inputRole")
    .val()
    .trim();
  startDate = $("#inputStartDate")
    .val()
    .trim();
  monthlyRate = $("inputMonthlyRate")
    .val()
    .trim();
    console.log(name);
});

database.ref().set({
  name: name,
  role: role,
  startDate: startDate,
  monthlyRate: monthlyRate,
});
