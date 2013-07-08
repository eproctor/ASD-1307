/* Name: Eugene Proctor :: Project 1 :: ASD 1307 */




 
 
/* ========== Clear Data  ========== */


var clearData = function() {


	var confirmDelete = confirm("Are you sure you want to delete?");
	if (confirmDelete) {
		localStorage.clear();
		alert ("The Contacts have been Deleted");
		window.location.reload();
		}else{
			alert("The Contacts Are Not Deleted");
		}	
		
}






/* ========== Display Data from Object to Screen  ========== */	
var displayEntries = function() {
alert ("List of Entries");
//$("#contact").html("Hello World 2");

//var page1 = document.GetElementById("contact")
//page1.innerHTML = "Hello"



//var test = $("contact");
//test.inner.html("Hello");




			var newDiv = document.createElement("div");
			
			
//Prevent multiple displays occurring during display function 

var clearBottom = docGetId("contact");
//clearBottom.removeAttribute("id","contact");
			
			
			

			var newUl = document.createElement("ul");
			 
			clearBottom.appendChild(newUl);
			//$("#contact").append(newUl)'
			var startList = ("div#contact");
			$(startList).append(newUl);
		  
			var displayPage1 = document.getElementById(contact);

		
			for (var i=0, len=localStorage.length; i<len; i++) {
			
				var newLi = document.createElement("li");
				newUl.appendChild(newLi);
					
				var anotherLi = document.createElement("li");
			
				
				var key = localStorage.key(i);
				var correctContact = localStorage.getItem(key);
				
				//Take the string from local storage and convert it back to an object by using JSON.parse()
				var contact = JSON.parse(correctContact);
				var anotherUl = document.createElement("ul");
				newLi.appendChild(anotherUl);
				
				//function to get image and right to the screen
				console.log("contact.category[1] is" + contact.category[1]);
				
				getSurveyImage(contact.category[1],anotherUl);
				for (var n in contact) {
					var newSubli = document.createElement("li");
					anotherUl.appendChild(newSubli);
					
					var text = contact[n][0] + "  " +contact[n][1]
					newSubli.innerHTML = text;
					anotherUl.appendChild(anotherLi);
					
				
				}
				//Call function to Create the edit and delete links
				createLinks(localStorage.key(i), anotherLi);
				
		}

	// Function to Get the Survey Image and right to the screen for the Contact
	function getSurveyImage(picName, anotherUl) {
	console.log ("This is the image section");
	//alert ("This is the image section");
		var surveyImageLi = document.createElement("li");
		anotherUl.appendChild(surveyImageLi)
		var newPic = document.createElement("img");
		var setPicSource = newPic.setAttribute("src","images/" + picName + ".png");
		surveyImageLi.appendChild(newPic);
		
		
	
	
	
	}

}

// Make Items Link Function
// Will create the edit and delete links

var createLinks = function(key, anotherLi) {





	var createEditLink = document.createElement("a");
	createEditLink.href = "#";
	createEditLink.key = key;
	var changeText = "Edit Contact to Update Entry";
	createEditLink.addEventListener("click", editContact);
	createEditLink.innerHTML = changeText;
	anotherLi.appendChild(createEditLink);

	// line break for edit and delete links
	var brTag = document.createElement("br");
	anotherLi.appendChild(brTag);

	var createDeleteLink = document.createElement("a");
	createDeleteLink.href = "#";
	createDeleteLink.key = key;
	var removeText = "Delete Contact";
	createDeleteLink.addEventListener("click", deleteContact);
	createDeleteLink.innerHTML = removeText;
	anotherLi.appendChild(createDeleteLink);




/* ========== Display only Results  ========== */	


var emptyScreen = document.getElementById("hide");






}


 

/* ========== Edit Entry to Change Information  ========== */

// Grab the data out of local Storage;
var editContact = function() {

alert ("This is the Edit Contact Function");

window.location = "#addpoc";
	
//Return Form Screen to Display	Form

	
	var editValue = localStorage.getItem(this.key);
	var contact = JSON.parse(editValue);
	
	
		var carsBox = docGetId("cars");
		var baseBallCardsBox = docGetId("baseBallCards");
		var coinsBox = docGetId("coins");
		var stampsBox = docGetId("stamps");
		var artBox = docGetId("art");
		var dollsBox = docGetId("dolls");
		var toysBox = docGetId("toys");
		var militaryBox = docGetId("military");
		var scientificBox = docGetId("scientific");
		var furnitureBox = docGetId("furniture");
		
		
		/*======================================================================*/
		


console.log (contact.category);
console.log (contact.category[1]);
	
// Populate Screen with saved data
	docGetId("startdate").value = contact.startdate[1];
	docGetId("fullName").value = contact.fullName[1];
	docGetId("email").value = contact.email[1];
	docGetId("city").value = contact.city[1];
	docGetId("description").value = contact.description[1];
	docGetId("rating").value = contact.rating[1];



	if (contact.category[1] === "cars") {
		console.log ("This is the cars field for propergation");
		$("#cars").prop("checked",true);
		console.log (contact.category[1]);
		console.log (contact.category);
		}       
	
	if (contact.category[1] === "baseBallCards") {
		console.log ("This is the baseBallCards field for propergation");
		$("#baseBallCards").prop("checked",true);
		console.log (contact.category[1]);
		console.log (contact.category);
		
		}       
	
	
	if (contact.category[1] === "coins") {
		console.log ("This is the coins field for propergation");
		$("#coins").prop("checked",true);
		console.log (contact.category[1]);
		console.log (contact.category);
		} 
		
	if (contact.category[1] === "stamps") {
		console.log ("This is the stamps field for propergation");
		$("#stamps").prop("checked",true);
		console.log (contact.category[1]);
		console.log (contact.category);
		} 
		
	if (contact.category[1] === "art") {
		console.log ("This is the art field for propergation");
		$("#art").prop("checked",true);
		console.log (contact.category[1]);
		console.log (contact.category);
		} 
		
	if (contact.category[1] === "dolls") {
		console.log ("This is the dolls field for propergation");
		$("#dolls").prop("checked",true);
		console.log (contact.category[1]);
		console.log (contact.category);
		} 
		
	if (contact.category[1] === "toy") {
		console.log ("This is the toy field for propergation");
		$("#toy").prop("checked",true);
		console.log (contact.category[1]);
		console.log (contact.category);
		} 
	
	

	
	//Set Physical Condition - Slider for entry

	$("#addpoc").page();  //Prevents Uncaught call methods on slider prior to initialization	// good
	console.log (contact.rating[1]);		// good  // console logs saved rating value
	var itemCondition = contact.rating[1];  // good  // sets rating to variable
	console.log (itemCondition);  			// good	  
	 
	
	$("#rating").val(itemCondition);  		//good 	// sets rating value with saved data
	console.log ($("#rating").val(itemCondition)); 					//good
	$("#rating").slider("refresh"); 		// refreshes slider  	// good
	
	
	//Remove old key from record and replace record with this new key
	console.log ("This Key is " + this.key);
	localStorage.removeItem(this.key);
	alert ("The old key " + this.key + " has been deleted");
	

		
}		
		

		


var deleteContact = function() {
	var confirmDelete = confirm ("Please confirm to delete this contact");
	if (confirmDelete) {
		localStorage.removeItem(this.key);
		alert ("The contact has been deleted");
		window.location.reload();
	
	}else{
		alert ("The contact did not delete");
		}
}	
	
	
	

/* ========== Check for Empty Storage ========== */

var emptyStorage = function() {
	
	
	if (localStorage.length===0) {
	
		alert ("Local Storage is Empty.  Testing Data is added");
		console.log ("The storage is empty. Testing Data is added");
		fillTestData();
		displayEntries();
		
	} else {
		
		displayEntries();

		} 
}



 

/* ========== Fill Storage with Test Data ========== */


var fillTestData = function() {
	for (var n in json) {
		var newId 			= Math.random(); 
		localStorage.setItem(newId, JSON.stringify(json[n])); 
	}
	
}



/* ========== Reload Page ========== */
			

var addContact = function() {

	window.location.reload();

}
		
 
 
 
 
 
 //  ===========================  Validation Function for Save Function ==========

 
 
 
 
 
 
// Validate the Form Field 
 var val = function(e) {
 alert ("Hello This checks for Val");
 	var valName = docGetId("fullName");
 	var valEmail = docGetId("email");
 	
	// Display error messages
		var errorMsg = [];
		
	// Check for error
		if (valName.value == "") {
			var nameError = "Please enter your name.";
			
			errorMsg.push(nameError);
		} 
		 
	}		 
 
 
 
 
 
 
/* ========== Define Variables ========== */
var  errorVal = document.getElementById("errorValidation");	

 
var validateSaveForm = function () {
	alert ("This is the Validation Save Form");
	var valName = docGetId("fullName");
	if (valName.value == "") {
		val();
	} else {
		saveData();
	}

}
 
 
 
/* ========== *** Function to GoTo additem.html page  ========== */


$("#pocLink").click(function() {

	window.location.replace("additem.html");
	return false;

});




//  =====================================


// Submit Handler function 
var parseContactList = function(datafromform) {
	// uses form data here;
	console.log(datafromform);
	
};


 
// --------------------------------------


// Validation for Home Page
$('#home').on('pageinit', function(){
	//code needed for home page goes here
});	




// Validation for Form Page
$('#collectData').on('pageinit', function(){
		console.log("Hello.  Document is Ready for myForm");
		var myForm = $('#collectDataForm');
		var errorslink = $("#errorsLink");
		
		
		// to turn on plugin
		    myForm.validate({
		    
			invalidHandler: function(form, validator) {
				alert ("Function Call for Invalid Handler");
				errorslink.click();
				var html = "";
				//console.log(validator.submitted);
				
				// loop through validator.submitted object
				for(var key in validator.submitted) {
					var label = $('label[for^="'+ key +'"]').not('[generated]');
					//console.log(label.text());
					var legend =  label.closest('fieldset').find('.ui-controlgroup-label');
					var fieldName = legend.length ? legend.text() : label.txt();
					html += '<li>'+ fieldName + '</li>';
				};
				$("#dialogboxErrors ul").html(html);
			},
			submitHandler: function() {
				var datafromform = myForm.serializeArray();  // Used to pass data internally by converting data into Arrays and Objects
				parseContactList(datafromform);
		}
	});
	
	//any other code needed for addItem page goes here
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	 
};

var getData = function(){

};





/*  =================  Save Data to Local Storage Function  ====================  */


var saveData = function(key) {
	//if there is no key.  This is a new item and needs a new key
	if (!key) {
	
		console.log ("The current key is "+ key);
		var newId 			= Math.random(); 
		console.log ("The current key is "+ key);
		console.log ("The New ID is " + newId);
	
	}else{
		console.log ("The current key is "+ key);
		 
		// This will keep the current key so we can update the entry
		newId = key;
		console.log ("The current key is "+ key);
		console.log (newId);
	
	}



var contact 								= {};
	contact.startdate						= ["Todays Date:", docGetId("startdate").value];
	contact.fullName						= ["Collector Name:", docGetId("fullName").value];	
	contact.email							= ["Email:", docGetId("email").value];
	contact.city							= ["Type of Material:", docGetId("city").value];
	contact.description						= ["Leave a Comment:", docGetId("description").value];
	contact.rating							= ["Condition of Item 0 Poor - 100 Mint:", docGetId("rating").value];
	
		


		if (docGetId("cars").checked == false) { console.log ("Cars is False");}
		if (docGetId("cars").checked == true) { 
			console.log ("Cars is True");
			var categoryCollection = "cars";
		}
		
		
		if (docGetId("baseBallCards").checked == false) { console.log ("baseBallCards is False");}
		if (docGetId("baseBallCards").checked == true) { 
			console.log ("baseBallCards is True");
			var categoryCollection = "baseBallCards";
		}
		
		if (docGetId("coins").checked == false) { console.log ("coins is False");}
		if (docGetId("coins").checked == true) { 
			console.log ("coins is True");
			var categoryCollection = "coins";
		}
		
		if (docGetId("stamps").checked == false) { console.log ("stamps is False");}
		if (docGetId("stamps").checked == true) { 
			console.log ("stamps is True");
			var categoryCollection = "stamps";
		}
		
		if (docGetId("art").checked == false) { console.log ("art is False");}
		if (docGetId("art").checked == true) { 
			console.log ("art is True");
			var categoryCollection = "art";
		}
		
		if (docGetId("dolls").checked == false) { console.log ("dolls is False");}
		if (docGetId("dolls").checked == true) { 
			console.log ("dolls is True");
			var categoryCollection = "dolls";
		}
				
		if (docGetId("toy").checked == false) { console.log ("toy is False");}
		if (docGetId("toy").checked == true) { 
			console.log ("toy is True");
			var categoryCollection = "toy";
		}
		
		
		
	/*	
		if (docGetId("military").checked == false) { console.log ("military is False");}
		if (docGetId("military").checked == true) { 
			console.log ("military is True");
			var categoryCollection = "military";
		}
		
		if (docGetId("scientific").checked == false) { console.log ("scientific is False");}
		if (docGetId("scientific").checked == true) { 
			console.log ("scientific is True");
			var categoryCollection = "scientific";
		}
		
		if (docGetId("furniture").checked == false) { console.log ("furniture is False");}
		if (docGetId("furniture").checked == true) { 
			console.log ("furniture is True");
			var categoryCollection = "furniture";
		}
	*/	
		
		
		
		
	
	contact.category						= ["Collection Category:", categoryCollection];

	console.log (contact.category);
	console.log (contact.category[1]);


	

	// Save data into local storage,  Use stringify to convert object to a string
	localStorage.setItem(newId, JSON.stringify(contact));
	window.location.reload();
	alert("JSON Data has been saved");	
	
	window.location = "#home";
	window.location.reload();

};








var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};


var docGetId = function(x) {

	var theId = document.getElementById(x);
	return theId; 	

}





/* ====================== List Page Below Has NO  Errors  ============================= */

/* ========== Jquery Display Page for Form  ========== */

		
$('#listPage').on('pageinit', function(){
		console.log("Hello.  This is the List Page for Forms");
		emptyStorage();
		//displayEntries();

});	
		

/* ====================== List Page Above Has NO Errors  ============================= */





/* ====================== Validation Below Has No Errors  ============================= */

/* ========== Waiting on Dom to be ready  ========== */



// Submit Handler function 
var parseContactList = function(datafromform) {
	// uses form data here;
	console.log(datafromform);
	validateSaveForm();

};


$(document).ready(function() {
	console.log("Hello.  Document is Ready for valform - Gold App");
	var valform = $("#contactsform"),
		errorslink = $("#errorsLink");
	
	
	
	// to turn on plugin
	valform.validate({
		
		invalidHandler: function(form, validator) {
			errorslink.click();
			var html = "";
			
			
		//console.log(validator.submitted);
			
			// loop through validator.submitted object
			for(var key in validator.submitted) {
				//var label = $("label[for^='"+ key +"']");
				//var label = $('label[for^="'+ key +'"]');
				var label = $('label[for^="'+ key +'"]').not("[style]");
				//console.log(label.text());
				var legend = label.closest("fieldset").find(".ui-controlgroup-label");
				
				// Trucurary Statement:  condition is true (?) then whatever the true value should be (:)  what ever the false value should be 
				// Trucurary Statement:  If there is a legend, I want to grab the legends value
				// Trucurary Statement:  If there is not a legend, I want to grab the normal label value instead
				//var fieldName = condition ? true : false;
				var fieldName = legend.length ? legend.text() : label.text(); 
				console.log (fieldName);
				html += "<li>"+ fieldName +"</li>";
			
			};
			$("#dialogboxErrors ul").html(html);
			
		},
		submitHandler: function() {
			/* var datafromform = valform.serialize();  // Used to pass data via ajax */
			var datafromform = valform.serializeArray();  // Used to pass data internally using Arrays and Objects
			parseContactList(datafromform);
			
		
		}
	
	
	});

// end of function for document.ready
});



var docGetId = function(x) {

	var theId = document.getElementById(x);
	return theId; 	

}

/* ====================== Validation Above Has No Errors  ============================= */