/**
 * Parses the input line and determins if it is something we expect and parses out the values, else returns an error
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
 * @param string line
 * @return object 
 */
function validateLine(line) {
	
	// LINE: 10:00 11:00 comment
	// We get
	// $1 start time
	// $3 end time
	// $4 commet
	breakUpRegex = new RegExp("([012]{0,1}[0-9](:|.)[0-6]{0,1}[0-9]) ([012]{0,1}[0-9](:|.)[0-6]{0,1}[0-9]) (.*)", "g");
	
	// COMMENT: looking for #322 or #sdf or #3dr etc.
	// We get
	// $1 hash
	commentRegex =  /(#\w+)/g
	
	var breakUp = this.breakUpRegex.exec(line);
		
	var returnData = new Object();
	returnData.error = false;
		
	if(breakUp) {
		
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

		
	} else {
		returnData.error = "Input line did not validate";
	}
	
	return returnData;

}