/* Name: Eugene Proctor :: Project 1 :: ASD 1307 */
/*  ============================================================== */
/*  =====================DOM Ready File =========================  */
/*  ============================================================== */


//	$(document).on('pageinit', '#formPage', function(){




		
	
		/*  =================  Save Data to Local Storage Function - Begin  ====================  */
		
			
			var saveData = function(key) {
				//if there is no key.  This is a new item and needs a new key
/*				if (!key) {
				
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
*/			
			
		//  Testing data blocked out contact	
			var contact 								= {};
				contact.startdate						= $("#startdate").val();
				contact.accountName						= $("#accountName").val();	
				contact.accountId						= $("#accountId").val();	
				contact.accountPw						= $("#accountPw").val();	
				contact.accountType						= $("#accountType").val();
				contact.textNumber						= $("#textNumber").val();
				
				
			
			
				
					
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
								
				
					
					
					
					
				
				contact.alertOption						= alertOptionCategory;
			
				console.log (contact.alertOption);
				console.log (contact.alertOption[1]);
			
			
				contact.changePw						= $("#changePw").val();
				contact.email							= $("#email").val();
				 
				contact.description						= $("#description").val();
				
		
		
		/*	
			var data 								= {};
				data.startdate						=  $("#startdate").val();
				data.accountName						=  $("#accountName").val();	
				data.accountId						=  $("#accountId").val();	
				data.accountPw						=  $("#accountPw").val();	
				data.accountType						=  $("#accountType").val();
				data.textNumber						=  $("#textNumber").val();
		*/		
				
					
					
			
				// Save data into local storage,  Use stringify to convert object to a string
				//localStorage.setItem(newId, JSON.stringify(contact));
				
				
				// Save data into Couch db for pwmdb1.   
				$.couch.db("pwmdb1").saveDoc(contact, {
					success: function(contact) {
						console.log("Data successfully saved: " + contact);
						alert ("success alert");
					},
					error: function(status) {
						console.log("Data did not save due to error: " + status);
						alert ("error alert");
					}
				});
			 
				
	/*			
				// DELETE DATA ENTRY FROM COUCH DB - WORKS - BEGIN
				// THIS ENTRY IS ACUTALLY A PUT REQUEST CAN BE USED TO UPDATE AN ENTRY
				// WHEN YOU LIST THE ENTRY AND PULL THE DATA INTO THE FORM, USE THIS METHOD
				// TO RESAVE THE ENTRY FOR THIS ID AND A NEW REVISION
				var doc = {
					_id: "94423780b37249ac97337dc61a001820",
					_rev: "1-cf5791d69f905d7c8c5ea9d78fc8baab",
					foo: "bar"
				};
				$.couch.db("pwmdb1").saveDoc(doc, {
					success: function(data) {
						console.log(data);
						
					},
					error: function(status) {
						console.log(status);
					}
				});	
				
	*/			// DELETE DATA ENTRY FROM COUCH DB - WORKS - END			
				
				
	/*
				
				// OPEN DATA ENTRY FROM COUCH DB - WORKS  - BEGIN
				// THIS ENTRY IS ACUTALLY A PUT REQUEST CAN BE USED TO UPDATE AN ENTRY
				// WHEN YOU LIST THE ENTRY AND PULL THE DATA INTO THE FORM, USE THIS METHOD
				// TO RESAVE THE ENTRY FOR THIS ID AND A NEW REVISION
				var doc = {
				//	_id: "94423780b37249ac97337dc61a002647"
					//_rev: "1-cf5791d69f905d7c8c5ea9d78fc8baab",
					//foo: "bar"
				};
				$.couch.db("pwmdb1").openDoc("94423780b37249ac97337dc61a002647", {
					success: function(data) {
						console.log(data);
						alert("open data check console");
					},
					error: function(status) {
						console.log(status);
					}
				});	
				
				// DELETE DATA ENTRY FROM COUCH DB - WORKS  - END			
				
							
	*/			
				
				
				
				
				
				
				
				
	//			window.location.reload();
				alert("JSON Data has been saved");	
				
	//			window.location = "#home";
	//			window.location.reload();
			
			};
			
			
	

	
		
		/*  =================  Save Data to Local Storage Function - End  ====================  */
		
		
		
		
		
		
		
	//});	
	
	


//});			// End of document.on(pageinit, couchAjaxPage function


