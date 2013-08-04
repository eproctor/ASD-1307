function (doc) {
  if (doc._id) {
    emit(doc._id);
  }
};


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