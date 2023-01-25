//Daily Planner
$(document).ready(function(){
    var currentMoment = moment().format('dddd, MMMM, YYYY');
    //Declared variable for the current    
    const WORKING_HOURS = ['9AM', '10AM', '11AM', '12PM','1PM','2PM','3PM','4PM','5PM']
    // Variables for the different time slots of working day

    $('#currentDay').text(currentMoment); //


}) 