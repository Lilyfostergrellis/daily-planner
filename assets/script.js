//Daily Planner
$(document).ready(function(){
    let currentMoment = moment().format('dddd, MMMM, YYYY');
    //Declared variable for the current    
    const WORKING_HOURS = ['9AM', '10AM', '11AM', '12PM','1PM','2PM','3PM','4PM','5PM']
    // Variables for the different time slots of working day

    $('#currentDay').text(currentMoment); 


    function getScheduledItemByHour(hour){
        return localStorage.getItem(hour)
    }

    function storeScheduledItem(hour, scheduledItem){
        localStorage.setItem(hour, scheduledItem)
    }

    function createTimeDataEl(hour){
        var timeDataEl = $('<td>').addClass('hour').css({width: '5%'});
        return timeDataEl.text(hour);
    }
    
    function createTextDataEl(colorClass){
        var textDataEl = $('<textarea col-10>').attr('style','width:80%');
        return textDataEl.addClass(colorClass);
    }
    


}) 