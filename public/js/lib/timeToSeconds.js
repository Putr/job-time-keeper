// Borrowed code from
// http://forums.aspfree.com/html-javascript-and-css-help-7/calculate-difference-between-two-times-212351.html
// 
// from comment by "sync_or_swim"
// http://forums.aspfree.com/member.php?u=46359
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