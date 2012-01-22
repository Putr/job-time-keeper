/**
 * @file Aplication start off point
 * 
 * @author Rok Andrée <rok@andree.si>
 * @url http://www.kanaria.si
 */

$(document).ready(function() {
	
	//
	// Define conf mapping confKey => confDefaultValue
	//
	var confMapper = {}
	confMapper.vcsurl     = "";
	confMapper.savelog    = "checked";
	confMapper.ignoretags = "#lunch, #break";
	confMapper.totaltime  = "8";
		
	//
	// Load conf from storage or load default value
	//
	preLoadLocalStorage(confMapper);
	
	setConfToStorageValues(confMapper);
	
	//
	// Load the time table
	// 
	timeTable = new timeTable();
	
	//
	// Detect change to config input fields
	//
	$('input.config-input').change(function (e) {
		
		var target = $(e.target);
		
		var key = target.attr('id');
		var value = target.val();
		
		if (value == "checked") {
			if (e.target.checked) {
				value = "checked";
			} else {
				value = "unchecked";
			}
		}
		
		if(key in confMapper) {
			localStorage.setItem(key, value);
		}
	})
	
	//
	//
	// Bind to ENTER on MAIN INPUT
	//
	//
	$('#time-input').keypress(function(event) {
		if ( event.which == 13 ) {
			event.preventDefault();
			
			var inputValue = $('#time-input').val();
			
			var parsedValues = validateLine(inputValue);
			
			if(isValid(parsedValues)) {
				
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
				$('<div class="alert-message in fade data-alert"><a class="close" href="#">×</a><p>'+parsedValues.error+'</p></div>').appendTo("td.input-line").hide();
				$(".alert-message").fadeIn('fast').delay(5000).fadeOut('slow', function () {
					$(this).remove();
				});
			}
			
		}
	})	
	
})






