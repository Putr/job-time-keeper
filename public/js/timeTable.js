/**
 * TIME TABLE OBJECT
 * 
 * Holds an entire time table
 * 
 * @param object date
 * Object of type Date()
 */
function timeTable(date) {
	
	// DATE
	this.date = date || new Date();
	
	// Input data
	this.data = new Array();
	
	// Todays total time
	this.totalTime = 0;
	
	/**
	 * Adds a new line to time table
	 * 
	 * @param string startTime
	 * @param string endTime
	 * @param mixed ticket 
	 * String or Array of hashes
	 * @param string comment 
	 * Comment together with hashes
	 * @param string inputLine 
	 * Entire input line
	 */
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
	
	/**
	 * Returns a time slot
	 * 
	 * @param integer id
	 * Id of slot
	 * @return mixed
	 * Object of data or undefined
	 */
	this.getTimeSlot = function(id) {
		return this.data[id];
	}
	
	/**
	 * Changes a time slot
	 * 
	 * @param string startTime
	 * @param string endTime
	 * @param mixed ticket 
	 * String or Array of hashes
	 * @param string comment 
	 * Comment together with hashes
	 * @param string inputLine 
	 * Entire input line
	 */
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
	
	/**
	 * Calculates the total time in the entire table
	 */
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