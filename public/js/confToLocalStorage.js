/**
 * Takes a mapper of key=>value object and filles all missing keys with value
 * @param object mapper 
 * Map of key=>value pairs
 * @return NONE
 */
function preLoadLocalStorage(mapper) {
	
	$.each(mapper, function(key, value) {
		if(!(key in localStorage)) {
			localStorage.setItem(key, value);
		} 
	});
	
}

/**
 * Loops thrugh confMapper and sets conf input fileds to storages values
 * @param object confMapper
 * @return NONE
 */
function setConfToStorageValues(confMapper) {
	
	$.each(confMapper, function(key, value) {
		var confValue = null;
		confValue = localStorage.getItem(key);
		if (confValue != null) {
			
			if (confValue === "checked") {
				$('#'+key).prop("checked", true);
				
			} else if (confValue == "unchecked") {
				$('#'+key).prop("checked", false);
				
			} else {
				$('#'+key).val(confValue);
				
			}
		}
	})
}

