// Display current date and time
var update = function() {
    document.getElementById("datetime")
    .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(update, 1000);

// Find current hour
var currentTime = moment().hour();


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("text8AM").onload = getValue8AM();
    document.getElementById("text9AM").onload = getValue9AM();
    document.getElementById("text10AM").onload = getValue10AM();
});

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

// Allows information to be loaded on reload
var store8AM= function(){
    var text = document.getElementById("text8AM").value;
    localStorage.setItem("text8AM",text);
}

var getValue8AM = function(){
    var storedText = localStorage.getItem("text8AM");
    if(storedText != null){
    document.getElementById("text8AM").value = storedText; 
    }
} 
// Save 8am user input
$('#btn8AM').click(function () {
    var text = document.getElementById("text8AM").value;
    localStorage.setItem("text8AM",text);
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

// Allows information to be loaded on reload
var store9AM= function(){
    var text = document.getElementById("text9AM").value;
    localStorage.setItem("text9AM",text);
}

var getValue9AM = function(){
    var storedText = localStorage.getItem("text9AM");
    if(storedText != null){
    document.getElementById("text9AM").value = storedText; 
    }
} 
// Save 9am user input
$('#btn9AM').click(function () {
    var text = document.getElementById("text9AM").value;
    localStorage.setItem("text9AM",text);
    });

// Set 9am status
// If 9am is in the past
if(currentTime > 10){
    $('#row10AM').addClass('past');
    $('#time10AM').addClass('past_hour');
    $('#btn10AM').addClass('past_btn');
}
// If 10am is the current time
if(currentTime === 10){
    $('#row10AM').addClass('present');
    $('#time10AM').addClass('present_hour');
    $('#btn10AM').addClass('present_btn');
}
// If 10am is in the future
if(currentTime < 10){
    $('#row10AM').addClass('future');
    $('#time10AM').addClass('future_hour');
    $('#btn10AM').addClass('future_btn');
}

// Allows information to be loaded on reload
var store10AM= function(){
    var text = document.getElementById("text10AM").value;
    localStorage.setItem("text10AM",text);
}

var getValue10AM = function(){
    var storedText = localStorage.getItem("text10AM");
    if(storedText != null){
    document.getElementById("text10AM").value = storedText; 
    }
} 
// Save 9am user input
$('#btn10AM').click(function () {
    var text = document.getElementById("text10AM").value;
    localStorage.setItem("text10AM",text);
    });



