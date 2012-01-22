/**
 * Checks if the object has an error property that is not false (but a string)
 * @param object data
 * @return boolean
 */
function isValid(data) {
	if (data.error !== false) {
		return false;
	} else {
		return true;
	}
}

/**
 * Calculate difference between 2 times
 * 
 * @param string timePre
 * Earlier time in HH:MM format
 * @param string timePost
 * Later time in HH:MM format
 * @return integer
 * Time difference in seconds
 */
function getTimeDifference(timePre, timePost) {
	var time1 = HMStoSec1(timePre+":00");
	var time2 = HMStoSec1(timePost+":00");
	var diff = time2 - time1;
	return diff;
}

/**
 * Checks if value is an array
 * 
 * @param mixed obj
 */
function isArray(obj) {
	if(obj) {
		return obj.constructor == Array;
	} else {
		return false;
	}
}