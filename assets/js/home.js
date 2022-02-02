// Pseudo Code
// 1. Display the current date at the top of the calendar
// 	-google: how to get the current date in javascript
// 		-how to use dates in javascript
// 2. Render time blocks
// 	-hard code in html using rows and cols
// 	-loop over and render the table rows and cols in javascript
// 3. Color-code time blocks for past, present and future
// 	-javascript, css
// 	-if then statements that relate to the date and apply certain css properties
// 	(select html elements in javascript - and add css to it)
// 4. Allow user to type in event in timeblocks
// 	-input fields, with text saved in local storage
// 	-attribute that indicates time-block on input fields
// 	-On SAVE: store the date/time as the key and the event as the value
// 		-create an event listener for the save button that puts this key, 	
// 		value pair into local storage
// 5.On refresh, grab the data from local storage and display it in the appropriate time block.

// Gets current date/hour
const currentDate = new Date();
var currentHour = currentDate.getHours();
// var hour = ((currentHour + 11) % 12 + 1);
// console.log(hour)

// Displays current date at top of calendar
function displayDate() {
    $("#currentDay").text(currentDate)
};

displayDate();


// Color-codes time blocks for past, present and future

if(currentHour <= 8) {
        $("#time-block-1").addClass("future")
    } else if (currentHour > 9) {
        $("#time-block-1").addClass("past")
    } else if (currentHour === 9) {
        $("#time-block-1").addClass("present")
    };

    if(currentHour <= 9) {
        $("#time-block-2").addClass("future")
    } else if (currentHour > 10) {
        $("#time-block-2").addClass("past")
    } else if (currentHour === 10) {
        $("#time-block-2").addClass("present")
    };

    if(currentHour <= 10) {
        $("#time-block-3").addClass("future")
    } else if (currentHour > 11) {
        $("#time-block-3").addClass("past")
    } else if (currentHour === 11) {
        $("#time-block-3").addClass("present")
    };

    if(currentHour <= 11) {
        $("#time-block-4").addClass("future")
    } else if (currentHour > 12) {
        $("#time-block-4").addClass("past")
    } else if (currentHour === 12) {
        $("#time-block-4").addClass("present")
    };

    if(currentHour <= 12) {
        $("#time-block-5").addClass("future")
    } else if (currentHour > 13) {
        $("#time-block-5").addClass("past")
    } else if (currentHour === 13) {
        $("#time-block-5").addClass("present")
    };

    if(currentHour <= 13) {
        $("#time-block-6").addClass("future")
    } else if (currentHour > 14) {
        $("#time-block-6").addClass("past")
    } else if (currentHour === 14) {
        $("#time-block-6").addClass("present")
    };

    if(currentHour <= 14) {
        $("#time-block-7").addClass("future")
    } else if (currentHour > 15) {
        $("#time-block-7").addClass("past")
    } else if (currentHour === 15) {
        $("#time-block-7").addClass("present")
    };

    if(currentHour <= 15) {
        $("#time-block-8").addClass("future")
    } else if (currentHour > 16) {
        $("#time-block-8").addClass("past")
    } else if (currentHour === 16) {
        $("#time-block-8").addClass("present")
    };

    if(currentHour <= 16) {
        $("#time-block-9").addClass("future")
    } else if (currentHour > 17) {
        $("#time-block-9").addClass("past")
    } else if (currentHour === 17) {
        $("#time-block-9").addClass("present")
    };

// Allow user to type in event in timeblocks
 $(".time-block").each(function(){
     $(this).append('<textarea>').addClass("taskText");
 })

// Save button event listener and vars to collect data to store
$(".saveBtn").on("click", function(){
    var time = $(this).siblings(".hour").attr("id");
    var toDoText = $(this).siblings(".time-block").children().val();
    // Save data to local storage 
    localStorage.setItem(time, toDoText);
    console.log(time, toDoText)
})
