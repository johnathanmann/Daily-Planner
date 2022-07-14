// Display current date and time
var update = function() {
    document.getElementById("datetime")
    .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(update, 1000);

// Find current hour
var currentTime = moment().hour();

// Displays saved data on load
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("text8AM").onload = getValue8AM();
    document.getElementById("text9AM").onload = getValue9AM();
    document.getElementById("text10AM").onload = getValue10AM();
    document.getElementById("text11AM").onload = getValue11AM();
    document.getElementById("text12PM").onload = getValue12PM();
    document.getElementById("text1PM").onload = getValue1PM();
    document.getElementById("text2PM").onload = getValue2PM();
    document.getElementById("text3PM").onload = getValue3PM();
    document.getElementById("text4PM").onload = getValue4PM();
    document.getElementById("text5PM").onload = getValue5PM();
});

$('#clear').click(function () {
    window.localStorage.clear();
    window.location.reload();
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

// Set 10am status
// If 10am is in the past
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
// Save 10am user input
$('#btn10AM').click(function () {
    var text = document.getElementById("text10AM").value;
    localStorage.setItem("text10AM",text);
    });

// Set 11am status
// If 11am is in the past
if(currentTime > 11){
    $('#row11AM').addClass('past');
    $('#time11AM').addClass('past_hour');
    $('#btn11AM').addClass('past_btn');
}
// If 11am is the current time
if(currentTime === 11){
    $('#row11AM').addClass('present');
    $('#time11AM').addClass('present_hour');
    $('#btn11AM').addClass('present_btn');
}
// If 11am is in the future
if(currentTime < 11){
    $('#row11AM').addClass('future');
    $('#time11AM').addClass('future_hour');
    $('#btn11AM').addClass('future_btn');
}

// Allows information to be loaded on reload
var store11AM= function(){
    var text = document.getElementById("text11AM").value;
    localStorage.setItem("text11AM",text);
}

var getValue11AM = function(){
    var storedText = localStorage.getItem("text11AM");
    if(storedText != null){
    document.getElementById("text11AM").value = storedText; 
    }
} 
// Save 11am user input
$('#btn11AM').click(function () {
    var text = document.getElementById("text11AM").value;
    localStorage.setItem("text11AM",text);
    });

// Set 12pm status
// If 12pm is in the past
if(currentTime > 12){
    $('#row12PM').addClass('past');
    $('#time12PM').addClass('past_hour');
    $('#btn12PM').addClass('past_btn');
}
// If 12pm is the current time
if(currentTime === 12){
    $('#row12PM').addClass('present');
    $('#time12PM').addClass('present_hour');
    $('#btn12PM').addClass('present_btn');
}
// If 12pm is in the future
if(currentTime < 12){
    $('#row12PM').addClass('future');
    $('#time12PM').addClass('future_hour');
    $('#btn12PM').addClass('future_btn');
}

// Allows information to be loaded on reload
var store12PM= function(){
    var text = document.getElementById("text12PM").value;
    localStorage.setItem("text12PM",text);
}

var getValue12PM = function(){
    var storedText = localStorage.getItem("text12PM");
    if(storedText != null){
    document.getElementById("text12PM").value = storedText; 
    }
} 
// Save 12pm user input
$('#btn12PM').click(function () {
    var text = document.getElementById("text12PM").value;
    localStorage.setItem("text12PM",text);
    });

// Set 1pm status
// If 1pm is in the past
if(currentTime > 13){
    $('#row1PM').addClass('past');
    $('#time1PM').addClass('past_hour');
    $('#btn1PM').addClass('past_btn');
}
// If 1pm is the current time
if(currentTime === 13){
    $('#row1PM').addClass('present');
    $('#time1PM').addClass('present_hour');
    $('#btn1PM').addClass('present_btn');
}
// If 1pm is in the future
if(currentTime < 13){
    $('#row1PM').addClass('future');
    $('#time1PM').addClass('future_hour');
    $('#btn1PM').addClass('future_btn');
}

// Allows information to be loaded on reload
var store1PM= function(){
    var text = document.getElementById("text1PM").value;
    localStorage.setItem("text1PM",text);
}

var getValue1PM = function(){
    var storedText = localStorage.getItem("text1PM");
    if(storedText != null){
    document.getElementById("text1PM").value = storedText; 
    }
} 
// Save 1pm user input
$('#btn1PM').click(function () {
    var text = document.getElementById("text1PM").value;
    localStorage.setItem("text1PM",text);
    });

// Set 2pm status
// If 2pm is in the past
if(currentTime > 14){
    $('#row2PM').addClass('past');
    $('#time2PM').addClass('past_hour');
    $('#btn2PM').addClass('past_btn');
}
// If 2pm is the current time
if(currentTime === 14){
    $('#row2PM').addClass('present');
    $('#time2PM').addClass('present_hour');
    $('#btn2PM').addClass('present_btn');
}
// If 1pm is in the future
if(currentTime < 14){
    $('#row2PM').addClass('future');
    $('#time2PM').addClass('future_hour');
    $('#btn2PM').addClass('future_btn');
}

// Allows information to be loaded on reload
var store2PM= function(){
    var text = document.getElementById("text2PM").value;
    localStorage.setItem("text2PM",text);
}

var getValue2PM = function(){
    var storedText = localStorage.getItem("text2PM");
    if(storedText != null){
    document.getElementById("text2PM").value = storedText; 
    }
} 
// Save 2pm user input
$('#btn2PM').click(function () {
    var text = document.getElementById("text2PM").value;
    localStorage.setItem("text2PM",text);
    });

// Set 3pm status
// If 3pm is in the past
if(currentTime > 15){
    $('#row3PM').addClass('past');
    $('#time3PM').addClass('past_hour');
    $('#btn3PM').addClass('past_btn');
}
// If 3pm is the current time
if(currentTime === 15){
    $('#row3PM').addClass('present');
    $('#time3PM').addClass('present_hour');
    $('#btn3PM').addClass('present_btn');
}
// If 3pm is in the future
if(currentTime < 15){
    $('#row3PM').addClass('future');
    $('#time3PM').addClass('future_hour');
    $('#btn3PM').addClass('future_btn');
}

// Allows information to be loaded on reload
var store3PM= function(){
    var text = document.getElementById("text3PM").value;
    localStorage.setItem("text3PM",text);
}

var getValue3PM = function(){
    var storedText = localStorage.getItem("text3PM");
    if(storedText != null){
    document.getElementById("text3PM").value = storedText; 
    }
} 
// Save 3pm user input
$('#btn3PM').click(function () {
    var text = document.getElementById("text3PM").value;
    localStorage.setItem("text3PM",text);
    });

// Set 4pm status
// If 4pm is in the past
if(currentTime > 16){
    $('#row4PM').addClass('past');
    $('#time4PM').addClass('past_hour');
    $('#btn4PM').addClass('past_btn');
}
// If 4pm is the current time
if(currentTime === 16){
    $('#row4PM').addClass('present');
    $('#time4PM').addClass('present_hour');
    $('#btn4PM').addClass('present_btn');
}
// If 4pm is in the future
if(currentTime < 16){
    $('#row4PM').addClass('future');
    $('#time4PM').addClass('future_hour');
    $('#btn4PM').addClass('future_btn');
}

// Allows information to be loaded on reload
var store4PM= function(){
    var text = document.getElementById("text4PM").value;
    localStorage.setItem("text4PM",text);
}

var getValue4PM = function(){
    var storedText = localStorage.getItem("text4PM");
    if(storedText != null){
    document.getElementById("text4PM").value = storedText; 
    }
} 
// Save 1pm user input
$('#btn4PM').click(function () {
    var text = document.getElementById("text4PM").value;
    localStorage.setItem("text4PM",text);
    });

// Set 5pm status
// If 5pm is in the past
if(currentTime > 17){
    $('#row5PM').addClass('past');
    $('#time5PM').addClass('past_hour');
    $('#btn5PM').addClass('past_btn');
}
// If 5pm is the current time
if(currentTime === 17){
    $('#row5PM').addClass('present');
    $('#time5PM').addClass('present_hour');
    $('#btn5PM').addClass('present_btn');
}
// If 5pm is in the future
if(currentTime < 17){
    $('#row5PM').addClass('future');
    $('#time5PM').addClass('future_hour');
    $('#btn5PM').addClass('future_btn');
}

// Allows information to be loaded on reload
var store5PM= function(){
    var text = document.getElementById("text5PM").value;
    localStorage.setItem("text5PM",text);
}

var getValue5PM = function(){
    var storedText = localStorage.getItem("text5PM");
    if(storedText != null){
    document.getElementById("text5PM").value = storedText; 
    }
} 
// Save 1pm user input
$('#btn5PM').click(function () {
    var text = document.getElementById("text5PM").value;
    localStorage.setItem("text5PM",text);
    });