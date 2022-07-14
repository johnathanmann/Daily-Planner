// Display current date and time
var update = function() {
    document.getElementById("datetime")
    .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(update, 1000);

// Find current hour
var currentTime = moment().hour();

console.log(currentTime);

// These functions can be called to save user input
var store= function(){
    var text = document.getElementById("text8AM").value;
    localStorage.setItem("text8AM",text);
}
    //local storage to keep values after refresh
var getValue = function(){
    var storedText = localStorage.getItem("text8AM");
    if(storedText != null){
    document.getElementById("text8AM").value = storedText; 
    }
}

// Set 8am status
// If 8am is in the past
if(currentTime > 8){
    $('#row8AM').addClass('past');
    $('#time8AM').addClass('past_hour');
    $('#btn8AM').addClass('past_btn');
}
// If 8am is the current time
if(currentTime === 8){
    $('#row8AM').addClass('present');
    $('#time8AM').addClass('present_hour');
    $('#btn8AM').addClass('present_btn');
}
// If 8am is in the future
if(currentTime < 8){
    $('#row8AM').addClass('future');
    $('#time8AM').addClass('future_hour');
    $('#btn8AM').addClass('future_btn');
}

// Save 8am user input

$('#btn8AM').click(function () {
    var text = document.getElementById("text8AM").value;
    localStorage.setItem("text8AM",text);
    });

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("text8AM").onload = getValue();
});



