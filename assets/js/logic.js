// Display current date and time
var update = function() {
    $("#currentDay")
    .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(update, 1000);

// Find current hour
var currentTime = moment().hour();

// Set 8am status
// If 8am is in the past
if(currentTime > 8){
    $('#row8AM').addClass('past');
    $('#time8AM').addClass('past_hour');
    $('#btn8AM').addClass('past_btn');
}
// If 8am is the current time
if(currentTime = 8){
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




// if(currentTime >= 8){
//     eightAm.addClass('past');
// }


