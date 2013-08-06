/*  This works - Begin 
function (doc) {
  if (doc.accountType) {
    emit(doc.accountName, doc.accountType);
    
    
    
    
  }
};

*/


function (doc) {
  if (doc._id) {
    emit(doc._id, {
    	"startdate": doc.startdate,
    	"accountName": doc.accountName,
    	"accountId": doc.accountId,
    	"accountPw": doc.accountPw,
    	"accountType": doc.accountType,
    	"textNumber": doc.textNumber,
    	"alertOption": doc.alertOption,
    	"changePw": doc.changePw,
    	"email": doc.email,
    	"description": doc.description
    	
    });
  }
};
$(".delete").on("click", function(){
	var doc = {};
	doc._id = $(this).data("id");
	doc._rev = $(this).data("rev");
	
	$.couch.db("pwmdb1").removeDoc(doc, {
		success: function(data) {
			console.log ("Item deleted from Couch dB: " + data);
		},
		error: function(status) {
			console.log ("item could not be delete because of an error: " + status);
		}
	});
});	




/*
$('.delete').on('click', function(){
	var doc = {};
	doc._id = $(this).data('id');
	doc._rev = $(this).data(('rev');
	
	$.couch.db("pumdb1").removeDoc(doc, {
		success: function(data) {
			console.log("item deleted from CouchdB successfully: " + data);
		},
		error: function(status) {
			console.log("item could not be deleted due to error: " + status);
		}
	});
	
});

*/
/*
<a class="delete" data-id="doc._id" data-rev="doc._rev">Delete</a>
*/


/*
function (doc) {
  if (doc._id.substr(0, 9) === "password:") {
    emit(doc._id);
  }
};
*/