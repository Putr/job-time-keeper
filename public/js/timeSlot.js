/**
 * TIME SLOT OBJECT
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