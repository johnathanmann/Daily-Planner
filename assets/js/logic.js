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
    var text = $("#text8AM").value;
    localStorage.setItem("text8AM",text);
}
    //local storage to keep values after refresh
var getValue = function(){
    var storedText = localStorage.getItem("text8AM");
    if(storedText != null){
    $("#text8AM").value = storedText; 
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
    var text = $("#text8AM").value;
    localStorage.setItem("text8AM",text);
    });

document.addEventListener("DOMContentLoaded", function() {
    $("#text8AM").onload = getValue();
});

// Set 9am status
// If 9am is in the past
if(currentTime > 9){
    $('#row9AM').addClass('past');
    $('#time9AM').addClass('past_hour');
    $('#btn9AM').addClass('past_btn');
}
// If 9am is the current time
if(currentTime === 9){
    $('#row9AM').addClass('present');
    $('#time9AM').addClass('present_hour');
    $('#btn9AM').addClass('present_btn');
}
// If 9am is in the future
if(currentTime < 9){
    $('#row9AM').addClass('future');
    $('#time9AM').addClass('future_hour');
    $('#btn9AM').addClass('future_btn');
}

// Save 9am user input

$('#btn9AM').click(function () {
    var text = $("#text9AM").value;
    localStorage.setItem("text9AM",text);
    });

document.addEventListener("DOMContentLoaded", function() {
    $("#text9AM").onload = getValue();
});



