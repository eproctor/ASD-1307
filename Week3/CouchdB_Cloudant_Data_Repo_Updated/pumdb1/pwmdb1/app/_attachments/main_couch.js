$(document).ready(function() {
	//console.log("Hello.  This is the DOM Page for Couch db Listing")
	// alert ("This is JavaScript");
	
	


	
	
	
	$.ajax({
		"url": "_view/pwords",
		"dataType":	"json",
		"success": function(data) {
			console.log(data);
			$.each(data.rows, function(index, password){
				//console.log (value);
				//var acronym = password.doc.acronym;
			});
			
		}
	});
	
	
});