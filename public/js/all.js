
$(document).ready(function() {
	
	// First we hide the tutorial.
	// @todo add functionality
	$('.how-to').slideUp('slow');
	
	timeTable = new timeTable();
	
	
	// Enter on input field
	$('#time-input').keypress(function(event) {
		if ( event.which == 13 ) {
			event.preventDefault();
			
			var inputValue = $('#time-input').val();
			
			var parsedValues = validateLine(inputValue);
			
			if(parsedValues !== false) {
				
				var returnValue = timeTable.addTimeSpan(parsedValues.startTime, parsedValues.endTime, parsedValues.hashes, parsedValues.comment, inputValue);
				
				console.log(timeTable, returnValue);
				
				var slot = timeTable.getTimeSlot(returnValue);
				
				console.log(slot);
				
				if(returnValue !== false) {
					console.log("Moving lines");
					var newLine = '<tr class="data-row"><td class="row-ticket">'+slot.ticket+'</td><td class="row-time">'+slot.startTime+' - '+slot.endTime+'</td><td class="row-comment">'+slot.comment+'</td><td class="row-timespan">'+slot.spanTime+'</td></tr>';
					
					console.log(newLine);
					
					$(newLine).insertBefore($('#input-row'));
					
					$('#time-input').val('');
					console.log(timeTable.totalTime);
					$('#big-counter').empty().html(timeTable.totalTime);
				}
				
			} else {
		// @todo report the error.
		}
			
		}
	})
	
	
	
	
})

function validateLine(line) {
	/**
	 * Lines
	 * 
	 * timespan [comment]
	 * 
	 * - timespan: startTime endTime
	 *	* Time with dot: 18.00 19.00
	 *	* time with : : 19:00 20:00
	 *	
	 * - comment
	 *  * any text of any lenght
	 *  * #nuber (#312) will be used for ticket id
	 *  
	 *  Examples
	 *  19:00 20:00 #312 Did some work
	 *  19.00 20.00 Did some work
	 * 
	 */
	
	// We get
	// $1 start time
	// $3 end time
	// $4 commet
	breakUpRegex = new RegExp("([012]{0,1}[0-9](:|.)[0-6]{0,1}[0-9]) ([012]{0,1}[0-9](:|.)[0-6]{0,1}[0-9]) (.*)", "g");
	
	// Comment .. looking for #322
	//We get
	// $1 hash
	commentRegex =  /(#\w+)/g
	
	var breakUp = this.breakUpRegex.exec(line);
		
		
	if(breakUp) {
		var returnData = new Object();
		
		returnData.startTime = breakUp[1];
		if	(breakUp[2] == ".") {
			returnData.startTime.replace(".", ":");
		}
		returnData.endTime   = breakUp[3];
		if	(breakUp[4] == ".") {
			returnData.endTime.replace(".", ":");
		}
		returnData.comment   = breakUp[5];
			
			
		returnData.hashes = returnData.comment.match(this.commentRegex);

		return returnData;
	} else {
		return false;
	}

}

function timeTable() {
	
	this.dailyHours = 8;
	
	this.data = new Array();
	
	this.totalTime = 0;
	
	this.changeDailyHours = function(hours) {
		this.dailyHours = hours;
		
		return true;
	}
	
	this.addTimeSpan = function(startTime, endTime, ticket, comment, inputLine) {
		
		if(typeof startTime == null || typeof endTime == null) {
			return false;
		}

		if(this.data.length >= 1) {

			var id = this.data.length - 1;
			
			var prevTime = this.data[id].endTime;

			if(getTimeDifference(prevTime, startTime) < 0) {
				return false;
			}
		}
		
		if(getTimeDifference(startTime, endTime) <= 0) {
			return false;
		}
		
		var slot = new timeSlot(startTime, endTime, ticket, comment, inputLine);
		
		this.data.push(slot);
		
		this.calcTotalTime();
		
		return (this.data.length - 1);
		
	}
	
	this.getTimeSlot = function(id) {
		return this.data[id];
	}
	
	this.editTimeSlot = function(id, startTime, endTime, ticket, comment, inputLine) {
		if(typeof startTime == null || typeof endTime == null || typeof id == null) {
			return false;
		}
		
		if(id != 0) {
			var prevTime = this.data[id - 1].endTime;

			if(getTimeDifference(prevTime, startTime) <= 0) {
				return false;
			}
		}
		if(id > this.data.lenght) {
			var nextTime = this.data[id + 1].endTime;

			if(getTimeDifference(endTime, nextTime) <= 0) {
				return false;
			}
		}
		
		if(getTimeDifference(startTime, endTime) <= 0) {
			return false;
		}
		
		this.data[id] = new timeSlot(startTime, endTime, ticket, comment, inputLine);
		
		this.calcTotalTime();
		
		return slot.spanTime;
		
	}
	
	this.calcTotalTime = function() {
		
		var timeSeconds = 0;
		
		$.each(this.data, function(y, slot) {
			console.log(slot);
			var slotTime = HMStoSec1(slot.spanTime+":00");
			console.log(timeSeconds);
			console.log(slotTime);
			timeSeconds = timeSeconds + slotTime;
		});
			console.log("Total time", timeSeconds);
		this.totalTime = convertSecondsToHHMMSS(timeSeconds)
	}

}


function timeSlot(startTime, endTime, ticket, comment, inputLine) {
	this.startTime = startTime;
	this.endTime   = endTime;
	
	
	if(isArray(ticket)) {
		ticket = ticket.join(", ");
	}
	
	if(ticket) {
		this.ticket	   = ticket;
	} else {
		this.ticket	   = '';
	}
	this.comment   = comment;
	this.inputLine = inputLine;
	
	this.spanTime;
	
	var diff = getTimeDifference(startTime, endTime);
	this.spanTime = convertSecondsToHHMMSS(diff);
	
}

function getTimeDifference(timePre, timePost) {
	var time1 = HMStoSec1(timePre+":00");
	var time2 = HMStoSec1(timePost+":00");
	var diff = time2 - time1;
	return diff;
}

function isArray(obj) {
	if(obj) {
		return obj.constructor == Array;
	} else {
		return false;
	}
}

//
// http://forums.aspfree.com/html-javascript-and-css-help-7/calculate-difference-between-two-times-212351.html
//

var secondsPerMinute = 60;
var minutesPerHour = 60;

function convertSecondsToHHMMSS(intSecondsToConvert) {
	
	var hours = convertHours(intSecondsToConvert);
	var minutes = getRemainingMinutes(intSecondsToConvert);
	minutes = (minutes == 60) ? "00" : minutes;
	var seconds = getRemainingSeconds(intSecondsToConvert);
	return hours+":"+minutes;
}

function convertHours(intSeconds) {
	var minutes = convertMinutes(intSeconds);
	var hours = Math.floor(minutes/minutesPerHour);
	return hours;
}
function convertMinutes(intSeconds) {
	return Math.floor(intSeconds/secondsPerMinute);
}
function getRemainingSeconds(intTotalSeconds) {
	return (intTotalSeconds%secondsPerMinute);
}
function getRemainingMinutes(intSeconds) {
	var intTotalMinutes = convertMinutes(intSeconds);
	return (intTotalMinutes%minutesPerHour);
}

function HMStoSec1(T) { // h:m:s
	var A = T.split(/\D+/) ;
	return (A[0]*60 + +A[1])*60 + +A[2];
}