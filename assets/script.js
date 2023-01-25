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
    
     function createSaveBtnEl(hour){
        var btnContainer = $('<td>').addClass('saveBtn').css({width:'8%'}).attr('type', 'button');
        var btn = $('<i class="fas fa-save"></i>');
        //function to generate save buttons
        
        btn.click(function(){
            var scheduledItem = $(this).parent().siblings('textarea').val()
            storeScheduledItem(hour, scheduledItem)
            //on the click of the save icon the text input is stored in the local storage
        });

    
        return btnContainer.append(btn)
        //appends
    }

    function createRowEl(hour, colorClass){
        var rowEl = $('<tr>').addClass('row');
        var timeDataEl = createTimeDataEl(hour);
        var textDataEl = createTextDataEl(colorClass);
        var saveBtnEl = createSaveBtnEl(hour);
        
        textDataEl.val(getScheduledItemByHour(hour))
        //retrieves 'saved' user input from their local storage

        rowEl.append(timeDataEl);
        rowEl.append(textDataEl);
        rowEl.append(saveBtnEl);
    
        return rowEl;
    }
    
    function convertStringHourToMoment(hour){
        return moment(hour, "HA")
    }
    
    function getColorClass(hour){
        var currentHour = convertStringHourToMoment(moment().format('HA'));
        var hour = convertStringHourToMoment(hour); //"1PM" -> {date: ...13:00:00, ..., ..}

        if (hour.isBefore(currentHour)){
            // if hour passed to function is before the current hour
            return "past"
        }
        
        if (hour.isAfter(currentHour)){
            // if the hour passed to function is ahead of the current hour
            return "future"
        } 

        // if the hour passed to the function is the same as current hour
        return "present"
    }
    
    function createTable(){
        var tableEl = $('<table>').addClass('table col-12');
    
        for (let hour of WORKING_HOURS) {
            var colorClass = getColorClass(hour)
            var rowEl = createRowEl(hour, colorClass);
            tableEl.append(rowEl);  
        }
    
        return tableEl;
    }
    
    // Calling and appending the createTable function that creates the table.
    $('.container').append(createTable());


}) 