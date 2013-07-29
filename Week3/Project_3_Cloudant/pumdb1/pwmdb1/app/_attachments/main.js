/* Name: Eugene Proctor :: Project 1 :: ASD 1307 */
/*  ============================================================== */
/*  =====================DOM Ready File =========================  */
/*  ============================================================== */

/*
   $(document).ready(function() {
	console.log("Hello.  This is the DOM Page");
	// alert ("This is JavaScript");
	
*/	





			 
		/* ============================== Clear Data - Begin  ================================ */
		
			
			var clearData = function() {
		
//		alert ("This is the clear option for local storage");
			var confirmDelete = confirm("Are you sure you want to delete?");
			if (confirmDelete) {
				localStorage.clear();
				alert ("The Contacts have been Deleted");
				window.location.reload();
				}else{
					alert("The Contacts Are Not Deleted");
				}	
				
		}
		
		


		/* ============================== Clear Data - End  ================================ */
		


/*  =============================================================  */
/*  ========= Add Ajax to Storage and to Screen - Begin =========  */
/*  ============================================================== */


/* ========== Fill Storage with Ajax Data - Begin - TESTED GOOD ========== */

		var fillAjaxData = function(data) {
	alert ("fill Ajax Function");

			for (var n in data) {
				var newId 			= Math.random(); 
				console.log (n);
				localStorage.setItem(newId, JSON.stringify(data[n])); 
			
			} //for loop n in data end
			
		}

/* ========== Fill Storage with Ajax Data - End - TESTED GOOD ========== */		




/* ========== */






/* ========== Display Ajax onto Screen  - Begin - TESTED GOOD ========== */


	var displayAjax = function() {
		alert ("Display Ajax Entries");
		
		$("section#ajaxDisplay").append("<ul></ul>");
//alert ("1");
		for (var i=0, len=localStorage.length; i<len; i++) {
//alert ("1a");
	
			
			
			console.log (i);
			
			
			var key = localStorage.key(i);
			var correctContact = localStorage.getItem(key);
			
			console.log (key);
			console.log (correctContact);
			console.log (" ");

//	alert ("2");
		
		//Take the string from local storage and convert it back to an object by using JSON.parse()
			var contact = JSON.parse(correctContact);
			
			console.log (contact);
			console.log (key);
			
			console.log (contact.startdate);
			
			
			for (var n in contact) {
			
				console.log (n); // title of key
				console.log (contact[n]); //value of key
			
//alert ("3");
			
				$("section#ajaxDisplay ul").append("<li>" + n + " : " + contact[n] + "</li>");
				
//alert ("4");
		
		
			}
		
		} // end of for localStorage loop
	
		

		return;
		
	
	
	}
	



/* ========== Display Ajax onto Screen  - End - TESTED GOOD ========== */





/* ========== */






/* ========== Display Ajax onto Screen  - Begin TESTED GOOD ========== */


	var displayCouchEntries = function() {
		alert ("Displaying Couch Ajax Entries - View Password Entry 1");
		
		
			
		$.ajax({
			"url": "_view/passwordaccount1",
			"dataType":	"json",
			"success": function(data) {
				console.log(data);
				$.each(data.rows, function(index, value){
				  console.log (value);
				  var startdate = value.value.startdate;
				  var accountName = value.value.accountName;
				  var accountId = value.value.accountId;
				  var accountPw = value.value.accountPw;
				  var accountType = value.value.accountType;
				  var textNumber = value.value.textNumber;
				  var alertOption = value.value.alertOption;
				  var changePw = value.value.changePw;
				  var email = value.value.email;
				  var description = value.value.description;
		
		
				//$("section#couchAjaxDisplay").append("<ul></ul>");
				
				$("#couchAjaxDisplay").append(
			
				
					$("<li>").append(
						$("<a>").attr("href", "#")
							.text(startdate)
						),
						
						$("<li>").append(
						$("<a>").attr("href", "#")
							.text(accountName)
						),
						
						$("<li>").append(
						$("<a>").attr("href", "#")
							.text(accountId)
						),
						
						$("<li>").append(
						$("<a>").attr("href", "#")
							.text(accountPw)
						),
						
						$("<li>").append(
						$("<a>").attr("href", "#")
							.text(accountType)
						),
						
						$("<li>").append(
						$("<a>").attr("href", "#")
							.text(textNumber)
						),
						
						$("<li>").append(
						$("<a>").attr("href", "#")
							.text(alertOption)
						),
						
						$("<li>").append(
						$("<a>").attr("href", "#")
							.text(changePw)
						),
						
						$("<li>").append(
						$("<a>").attr("href", "#")
							.text(email)
						),
						
						$("<li>").append(
						$("<a>").attr("href", "#")
							.text(description)
						)
							
							
							
				);
				
//alert ("1");
						
				});
			//	$("#couchAjaxDisplay").listview("refresh");
			}
		});
	
}		
		



/* ========== Display Ajax onto Screen  - End - TESTED GOOD ========== */






















/* ========== Check for Empty Storage - Begin - TESTED GOOD ========== */

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


/* ========== Check for Empty Storage - End - TESTED GOOD ========== */






/* ========== Check for Ajax Empty Storage - Begin - TESTED GOOD ========== */

var emptyAjaxStorage = function() {
	
	
	if (localStorage.length===0) {
	
		alert ("Local Storage is Empty.  Ajax - Testing Data is added");
		console.log ("The storage is empty. Ajax - Testing Data is added");
		
		
		$.ajax({
			url      : "data.json",
			type     : "GET",
			dataType : "json",
			success  : function(data, status) {
				console.log(status, data);
				fillAjaxData(data);
				displayAjax();
				
			//success	: function(response){
			//	console.log (response.languages[0].name);
			},
			error : function(error, parseerror){
				console.log("Error: " + error + "\nParse Error: " + parseerror);
			
				}
		});

	} else {
		
		displayAjax();

		} 
}


/* ========== Check for Ajax Empty Storage - End - TESTED GOOD ========== */





/* ========== Check for Couch Ajax Empty Storage - Begin - TESTED GOOD ========== */

var emptyCouchStorage = function() {
console.log("Empty Couch Storage Function");

	if (localStorage.length===0) {
	
		//alert ("Local Storage is Empty.  Couch dB Ajax - Testing Data is added");
		//console.log ("The storage is empty. Couch dB Ajax - Testing Data is added");
		//fillCoutchTestData();
		displayCouchEntries();
		
	}	
}





/* ========== Check for Couch Ajax Empty Storage - End - TESTED GOOD ========== */



















/* ========== Check for XML Empty Storage - Begin - TESING  ========== */

var emptyXMLStorage = function() {
	
	
	if (localStorage.length===0) {
	
		var data = $.parseXML(data);
	
		var items = $(data);
		items.find("item").each(function(){
			var item = $(this);
			console.log("Name: ", item.find("name"));
		});	
	
	
	
	/*
		alert ("Local Storage is Empty.  Ajax - Testing Data is added");
		console.log ("The storage is empty. Ajax - Testing Data is added");
		
		parse=new DomParser();
		xmlDoc=parser.parseFromString(txt,"text/xml");
		
	*/	
		
		
		
		
		
		/*
		$.ajax({
			url      : "xhr/data.xml",
			type     : "GET",
			dataType : "xml",
			success  : function(data, status) {
				console.log(status, data);
				fillAjaxData(data);
				displayAjax();
				
			//success	: function(response){
			//	console.log (response.languages[0].name);
			},
			error : function(error, parseerror){
				console.log("Error: " + error + "\nParse Error: " + parseerror);

				}
		
		
		
		});
		*/
		
	} else {
		
		displayAjax();

		} 
}


/* ========== Check for XML Empty Storage - End - TESTING ========== */























		
		
/*  =================== Add Data to Screen ======================  */
		
		
		
		
/*	
		
		
		
			

		// Add Ajax to Screen - Begin
			for (var i=0, len=localStorage.length; i<len; i++) {
		
				var key = localStorage.key(i);
				var correctContact = localStorage.getItem(key)
				console.log (correctContact);
				
				
				var contact = JSON.parse(correctContact);
					console.log (contact);
					console.log ("Start Date: " + contact.startdate);
					console.log ("Start Date: " + contact[0]);
				var hTitle = ["Date of Account Entry: ", "Name on Account: ", "User Id: ", "Password: ", "Type of Password Account: ", "Send Alert About Account: ", "Change Password in (x) days: ", "Email Address for Alerts: ", "Text Number for Alerts: ", "Description: " ];	
				var hResult = ["startdate", "accountName", "accountId", "accountPw", "accountType", "textNumber", "alertOption", "changePw", "email", "description" ]	
					$("section#ajaxDisplay").append("<ul></ul>");
					
				/*
				var displayHere = $("#ajaxDisplay");
					var newUl = $("<ul></ul>");
						$(newUl).appendTo(displayHere);
				*/	
/*				
					
						for (i=0; i < hTitle.length; i++) {
							console.log (hTitle[i]);
							//console.log (contact[i][0]);
							$("section#ajaxDisplay ul").append("<li>" + hTitle[i] + " : " + "contact."+ hResult[i] + "</li>");
						console.log (n + " value: ", contact.startdate);
						console.log (n + " value: " + contact.startdate);
						
						} // for loop for headers - End
			
					
					
					
					
					
					
					
					
					
			} // for loop localStorage end
			
			
			
//- Good Code End		
		
	//	} // fillAjaxData function end
	
	
*/	
	
	
	/*	
			console.log ("Start Date: " + json.startdate);
			console.log ("Account Name: " + json.accountName);
			console.log ("Account Id: " + json.accountId);
			console.log ("Account Password: " + json.accountPw);
			console.log ("Account Type: " + json.accountType);
			console.log ("Text Number: " + json.textNumber);
			console.log ("Alert Option: " + json.alertOption);
			console.log ("Change Password: " + json.changePw);
			console.log ("Email: " + json.email);
			console.log ("Description: " + json.description);
			console.log ("  ");

			var newId 			= Math.random(); 
			
		/*	
			if (newId) {
				var key = newId;
				console.log (key);
		*/	
/*			
					//for (var i=0, len=localStorage.length; i<len; i++) {
						localStorage.setItem(newId, json.startdate);
						console.log (newId + " "+ json.startdate);
						localStorage.setItem(newId, json.accountName);
						console.log (newId + " " + json.accountName);
						localStorage.setItem(newId, json.accountId);
						localStorage.setItem(newId, json.accountPw);
						localStorage.setItem(newId, json.accountType);
						localStorage.setItem(newId, json.textNumber);
						localStorage.setItem(newId, json.alertOption);
						localStorage.setItem(newId, json.changePw);
						localStorage.setItem(newId, json.email);
						localStorage.setItem(newId, json.description);
						var startDatePost = localStorage.getItem(newId, json.startdate);
						console.log (newId + " "+ json.startdate);
						console.log (startDatePost);
						
						var accountNamePost = localStorage.getItem(newId, json.accountName);
						console.log (newId + " " + json.accountName);
						console.log (accountNamePost);
						
						var accountIdPost = localStorage.getItem(newId, json.accountId);
						var accountPwPost = localStorage.getItem(newId, json.accountPw);
						var AccountTypePost = localStorage.getItem(newId, json.accountType);
						var TextNumPost = localStorage.getItem(newId, json.textNumber);
						var AlertOptPost = localStorage.getItem(newId, json.alertOption);
						var ChangePwPost = localStorage.getItem(newId, json.changePw);
						var emailPost = localStorage.getItem(newId, json.email);
						var descriptionPost = localStorage.getItem(newId, json.description);
						
						
				/* ===================== Display Content to Screen =================== */
/*						
					var displayHere = $("#ajaxDisplay");
					var newUl = $("<ul></ul>");
						$(newUl).appendTo(displayHere);
						$("<heading><h2>AJAX Data</h2></heading>").appendTo(newUl);
						$("<heading><h3>This page pulls remote data from AJAX</h3></heading>").appendTo(newUl);
						
						
						
					var newLi = $("<li></li>");
						$(newLi).appendTo(newUl);
						$(newLi).html(newId + " "+ json.startdate);
						$(newLi).html("Start Date: " + json.startdate);
						
						
					var anotherLi = $("<li></li>");
						$(anotherLi).appendTo(newLi);
						$(anotherLi).html(newId + " "+ json.accountName);
						$(anotherLi).html("Account Name: " + json.accountName);
						
						
					var newLi = $("<li></li>");
						$(newLi).appendTo(anotherLi);
						$(newLi).html(newId + " "+ json.accountId);
						$(newLi).html("Account Id: "+ json.accountId);
						
						
											
					var anotherLi = $("<li></li>");
						$(anotherLi).appendTo(newLi);
						$(anotherLi).html(newId + " "+ json.accountPw);	
						$(anotherLi).html("Account Password: " + json.accountPw);	
						
						
												
					var newLi = $("<li></li>");
						$(newLi).appendTo(anotherLi);
						$(newLi).html(newId + " "+ json.accountType);
						$(newLi).html("Account Type: " + json.accountType);
						
						
											
					var anotherLi = $("<li></li>");
						$(anotherLi).appendTo(newLi);
						$(anotherLi).html(newId + " "+ json.textNumber);	
						$(anotherLi).html("Text Number: " + json.textNumber);	
						
						
												
					var newLi = $("<li></li>");
						$(newLi).appendTo(anotherLi);
						$(newLi).html(newId + " "+ json.alertOption);
						$(newLi).html("Alert Option: " + json.alertOption);
						
											
					var anotherLi = $("<li></li>");
						$(anotherLi).appendTo(newLi);
						$(anotherLi).html(newId + " "+ json.changePw);	
						$(anotherLi).html("Change Password: " + json.changePw);	
						
						
																	
					var newLi = $("<li></li>");
						$(newLi).appendTo(anotherLi);
						$(newLi).html(newId + " "+ json.email);
						$(newLi).html("Email: " + json.email);
											
											
					var anotherLi = $("<li></li>");
						$(anotherLi).appendTo(newLi);
						$(anotherLi).html(newId + " "+ json.description);	
						$(anotherLi).html("Description: " + json.description);	
						
							
						
						
						
						
						
						//$(anotherLi).html(TextNumPost);
						console.log (TextNumPost);
						
						
					//	$(newLi).html(accountIdPost);
					//	$(newLi).html(accountPwPost);
					//	$(newLi).html(AccountTypePost);
					//	$(newLi).html(TextNumPost);
					//	$(newLi).html(AlertOptPost);
					//	$(newLi).html(ChangePwPost);
					//	$(newLi).html(descriptionPost);
					//	$(newLi).html(emailPost);
						
						
						
						
						
						
						
						
					
					//}
				
			
			
			
		//	}
			
			
			
			
		//	localStorage.setItem(newId, json.startdate); 
		//	console.log (newId);
		//	var date = localStorage.getItem(newId, json.startdate);
			
		//	console.log ("This is the Date from Local Storage " + date);
			
			// Create UL tag
			//var newUl = document.createElement("ul");
			var newUl = $("<ul></ul>");
			$(newUl).appendTo(displayHere);
//			$(displayHere).append(newUl);
				
		//		$("<section>Test</section>").appendTo(newUl);
			
			for (var i=0, len=localStorage.length; i<len; i++) {
//				console.log ([i]);
				var newLi = $("<li></li>");
				$(newLi).appendTo(newUl);
				var anotherLi = $("<li></li>")
				
				var key = localStorage.key(i);
				var correctContact = localStorage.getItem(key);
				console.log (correctContact);
				
				//Take the string from local storage and convert it back to an object by using JSON.parse()
				//var contact = JSON.parse(correctContact);
				var anotherUl = $("<ul></ul>");
				$(anotherUl).appendTo(newLi);
			
			//function to get image and right to the screen
			console.log("json.alertOption is " + json.alertOption);
		
		/*	
			getSureyImage(json.alertOption, anotherUl);
			for (var n in contact) {
				var newSubli = document.createElement("li");
				anotherUl.appendChild(newSubli);
				
				var text = contact[n][0] + "  " +contact[n][1]
				//newSubli.innerHTML = text;
				$(newSubli).html(text);
				anotherUl.appendChild(anotherLi);
				}
		*/	
//Call function to Create the edit and delete links
// ? createLinks(localStorage.key(i), anotherLi);
			
	
//			};	
		/* ?			
			// Function to Get the Survey Image and right to the screen for the Contact
			function getSurveyImage(picName, anotherUl) {
			console.log ("This is the image section");
			//alert ("This is the image section");
				var surveyImageLi = document.createElement("li");
				anotherUl.appendChild(surveyImageLi)
				var newPic = document.createElement("img");
				var setPicSource = newPic.setAttribute("src","images/" + picName + ".png");
				surveyImageLi.appendChild(newPic);
				
				
		*/
		
		
		
		
		
		
//		}








/*  =============================================================  */
/*  =========== Add Ajax to Storage and to Screen - End =========  */
/*  ============================================================== */



		/* ================= Display Data from Object to Screen - Begin  ============================ */
		var displayEntries = function() {
//		alert ("List of Entries");
		
		

					
					
		//Prevent multiple displays occurring during display function 
		
		//var clearBottom = docGetId("contact");
		var clearBottom = $("#contact");
		
					var newUl = document.createElement("ul");
					 
					//clearBottom.appendChild(newUl);
					$("#contact").append(newUl);

				  
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
						console.log("contact.alertOption[1] is" + contact.alertOption[1]);
						
						getSurveyImage(contact.alertOption[1],anotherUl);
						for (var n in contact) {
							var newSubli = document.createElement("li");
							anotherUl.appendChild(newSubli);
							
							var text = contact[n][0] + "  " +contact[n][1]
							//newSubli.innerHTML = text;
							$(newSubli).html(text);
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
				var setPicSource = newPic.setAttribute("src", picName + ".png");
				surveyImageLi.appendChild(newPic);
				
				
			
			
			
			}
		
		}
		


		/* ================= Display Data from Object to Screen - End ============================ */
		
		
		
		
		
		
		/* ============================== Creates Links  - Begin ================================== */




		
		
		// Make Items Link Function
		// Will create the edit and delete links
		
		var createLinks = function(key, anotherLi) {
		
		
//		alert ("Creating Links 1");
		
	
	var createEditLink = document.createElement("a");
			createEditLink.href = "#";
			createEditLink.key = key;
			var changeText = "Edit Contact to Update Entry";
			createEditLink.addEventListener("click", editContact);
			$(createEditLink).html(changeText);
			anotherLi.appendChild(createEditLink);
		
			// line break for edit and delete links
			var brTag = document.createElement("br");
			anotherLi.appendChild(brTag);
	
	
			
			var createDeleteLink = document.createElement("a");
			createDeleteLink.href = "#";
			createDeleteLink.key = key;
			var removeText = "Delete Contact";
			createDeleteLink.addEventListener("click", deleteContact);
			$(createDeleteLink).html(removeText);
			anotherLi.appendChild(createDeleteLink);
	
	

//		alert ("Creating Links 3");
		
		
		/* ========== Display only Results  ========== */	
		
			
		/* ========== Display only Results  ========== */	
		
		

		
		
		
		
		
		
		}
		
//		alert ("Creating Links 4");
		 
		
		/* ========== Edit Entry to Change Information  ========== */
		
		// Grab the data out of local Storage;
		var editContact = function() {
		
		alert ("This is the Edit Contact Function");
		
		window.location = "#formPage";
			
		//Return Form Screen to Display	Form
		
//alert ("Edit Entry to Change Information  1");
			var editValue = localStorage.getItem(this.key);
			var contact = JSON.parse(editValue);
			
//alert ("edit screen 1");			
			
		
				/*======================================================================*/
				
		
		
		console.log (contact.alertOption);
		console.log (contact.alertOption[1]);
			
		// Populate Screen with saved data
			$("#startdate").val(contact.startdate[1]);
			$("#accountName").val(contact.accountName[1]);
			
			$("#accountId").val(contact.accountId[1]);	
			$("#accountPw").val(contact.accountPw[1]);		
			$("#accountType").val(contact.accountType[1]);	
			
			$("#description").val(contact.description[1]);
			$("#changePw").val(contact.changePw[1]);
			
			$("#email").val(contact.email[1]);
			$("#textNumber").val(contact.textNumber[1]);
			
		
//alert ("edit screen 2");
		
			if (contact.alertOption[1] === "yesAlerts") {
				console.log ("This is the Yes to Alerts field for propergation");
				$("#yesAlerts").prop("checked",true);
				console.log (contact.alertOption[1]);
				console.log (contact.alertOption);
//				alert ("picked up yesAlerts");
				}       
			
			if (contact.alertOption[1] === "noAlerts") {
				console.log ("This is the No to Alerts field for propergation");
				$("#noAlerts").prop("checked",true);
				console.log (contact.alertOption[1]);
				console.log (contact.alertOption);
//				alert ("picked up noAlerts");
				}       
			
			
//alert ("edit screen 3");		
		
			
			//Set Physical Condition - Slider for entry
		
			$("#formPage").page();  //Prevents Uncaught call methods on slider prior to initialization	// good
			console.log (contact.changePw[1]);		// good  // console logs saved changePw value
			var itemCondition = contact.changePw[1];  // good  // sets changePw to variable
			console.log (itemCondition);  			// good	  
			 
			
			$("#changePw").val(itemCondition);  		//good 	// sets changePw value with saved data
			console.log ($("#changePw").val(itemCondition)); 					//good
			$("#changePw").slider("refresh"); 		// refreshes slider  	// good
			
			
			//Remove old key from record and replace record with this new key
			console.log ("This Key is " + this.key);
			localStorage.removeItem(this.key);
//			alert ("The old key " + this.key + " has been deleted");
			
//alert ("edit screen 4");	
				
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
			
			



		/* ============================== Creates Links  - End ================================== */





	
		
		/* ========== Check for Empty Storage - Begin========== */
		
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
		
		
			/* ========== Check for Empty Storage - End ========== */
		 
		
		
		
		
		/* ========== Fill Storage with Test Data - Begin ========== */
		
		
		var fillCoutchTestData = function() {
			for (var n in json) {
				var newId 			= Math.random(); 
				localStorage.setItem(newId, JSON.stringify(json[n])); 
			}
			
		}
		
		

		/* ========== Fill Storage with Test Data End  ========== */





		
		
		
		
		
		
		/* ========== Fill Storage with Test Data - Begin ========== */
		
		
		var fillTestData = function() {
			for (var n in json) {
				var newId 			= Math.random(); 
				localStorage.setItem(newId, JSON.stringify(json[n])); 
			}
			
		}
		
		

		/* ========== Fill Storage with Test Data End  ========== */






		/* ==========  Display Alert Button Options - Begin =========== */
		
		
		
		var setSendAlerts = function() {
				$("section#yesToAlerts").fadeIn();
		}
		
		
				
		
		var removeSendAlerts = function() {
				$("section#yesToAlerts").fadeOut();
		}
		
		
		
		
		/* ==========  Display Alert Button Options - End  =========== */
		
		








/*
});
*/

/*  ============================================================================ */
/*  ============================================================================ */ 
 
 	
	
/*  =============================================================  */
/*  ================ Home Page Pageinit =========================  */
/*  ============================================================== */
	 
	$('#home').on('pageinit', function(){
		//alert ("This is JavaScript");
		console.log ("Home Page Ready");
		
		
		
	});	
	
	
	
	
	
	
	
	
	
	
/*  ============================================================== */	
/*  ================ About Page Pageinit ========================= */
/*  ============================================================== */
	
	$("#about").on("pageinit", function(){
		//code needed for home page goes here
		console.log ("About Page Ready");
	});	
	
	
	
	
	
	
	
	
	
	
	
	
/*  ============================================================== */	
/*  ================ Form Page Pageinit =========================  */
/*  ============================================================== */
	
	$('#formPage').on('pageinit', function(){
		//code needed for home page goes here
		console.log ("Form Page Ready");
		
		
		
		
		
		
	var clearData = function(){
		alert("This is the clear option for local storage");
	
	}
	
		
		
		
		
		
		
		
		
		
		
		
		/*  ================ Define Variables - Begin =========================  */
		
		var valform = $("#contactsform"),
		errorslink = $("#errorsLink");
	
	


		/*  ================ Define Variables - End =========================  */



	
		/*  ================ Form Page Validation - Begin =========================  */
		 
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
					 var datafromform = valform.serialize();  // Used to pass data via ajax 
					//var datafromform = valform.serializeArray();  // Used to pass data internally using Arrays and Objects
					parseContactList(datafromform);
					
				
				}
			
			
			});
		 
		
		
	
		
		
		/*  ================ Form Page Validation - End =========================  */
		
		
		
		/*  ================ Submit Handler Function  - Begin =========================  */
		
					
			// Submit Handler function 
			var parseContactList = function(datafromform) {
				// uses form data here;
//					alert ("This is the parseContactList");
				console.log(datafromform);
				saveData();
				
			
			};
		
		
		/*  ================ Submit Handler Function  - End =========================  */
		
		
	
		
		
		
	
		/*  =================  Save Data to Local Storage Function - Begin  ====================  */
		
			
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
				contact.startdate						= ["Date of Account Entry:", $("#startdate").val()];
				contact.accountName						= ["Name on Account:", $("#accountName").val()];	
				contact.accountId						= ["Account ID:", $("#accountId").val()];	
				contact.accountPw						= ["Account Password:", $("#accountPw").val()];	
				contact.accountType						= ["Type of Password Account:", $("#accountType").val()];
				contact.textNumber						= ["Text Number for Alerts:", $("#textNumber").val()];
				
				
			
			
				
					
					if ($("#yesAlerts:radio:checked").val()) { 
					console.log ($("#yesAlerts:radio:checked"));
					console.log ($("#yesAlerts:radio:checked").val());
					
						console.log ("Send - Alert Messages is - Checked");
						var alertOptionCategory = "yesAlerts";
						} else {
							console.log ("Send - Alert messages is - Not Checked");
						
						}
				
					
					
					if ($("#noAlerts:radio:checked").val()) { 
					console.log ($("#noAlerts:radio:checked"));
					console.log ($("#noAlerts:radio:checked").val());
						console.log ("Don't Send - Alert Messages is - Checked");
						
						
						var alertOptionCategory = "noAlerts";
						} else {
							console.log ("Don't Send - Alert messages is - Not Checked");
						
						}
								
				
					
					
					
					
				
				contact.alertOption						= ["Send Alerts about Account:", alertOptionCategory];
			
				console.log (contact.alertOption);
				console.log (contact.alertOption[1]);
			
			
				contact.changePw						= ["Change Password in (x) days:", $("#changePw").val()];
				contact.email							= ["Email Address for Alerts:", $("#email").val()];
				 
				contact.description						= ["Description of Account:", $("#description").val()];
				
				
					
			
				// Save data into local storage,  Use stringify to convert object to a string
				localStorage.setItem(newId, JSON.stringify(contact));
				window.location.reload();
				alert("JSON Data has been saved");	
				
				window.location = "#home";
				window.location.reload();
			
			};
			
			
	

	
		
		/*  =================  Save Data to Local Storage Function - End  ====================  */
		
		
		
		
		
		
		
	});	
	
	
	
	
	
	
/*  ============================================================== */	
/*  ================ Display Page Pageinit ======================  */
/*  ============================================================== */
	
	$('#displayPage').on('pageinit', function(){
		//code needed for Display Page goes here
		console.log ("Display Page Ready");
		emptyStorage();
		//displayEntries();
		
		
		
		
		
		
		
	});	


	
		
/*  ============================================================== */	
/*  =================== Couch dB AJAX Page Pageinit ======================  */
/*  ============================================================== */
	
	$('#couchAjaxPage').on('pageinit', function(){
	
	
		console.log ("Couch DataBase Page via Ajax Ready ");
		emptyCouchStorage();
	
		
	});	





	
/*  ============================================================== */	
/*  =================== AJAX Page Pageinit ======================  */
/*  ============================================================== */
	
	$('#ajaxPage').on('pageinit', function(){
	
		emptyAjaxStorage();
	
		
	});	




	
/*  ============================================================== */	
/*  =================== XML Page Pageinit ======================  */
/*  ============================================================== */
	
	$('#xmlPage').on('pageinit', function(){
		
		emptyXMLStorage();
		
		
		
	/*	
		
		$.ajax({
			url      : "xhr/data.xml",
			type     : "GET",
			dataType : "xml",
			success  : function(json, status) {
				console.log(status, json);
			//success	: function(response){
			//	console.log (response.languages[0].name);
			},
			error : function(error, parseerror){
				console.log("Error: " + error + "\nParse Error: " + parseerror);
			}
		});
		
	*/	
		
		
	});	




