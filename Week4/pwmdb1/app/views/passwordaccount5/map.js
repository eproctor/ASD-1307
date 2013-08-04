function (doc) {
  if (doc._id.substr(0,18)==="password:account:5") {
    //emit(doc._id.substr(18), {
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
    	"description": doc.description,
    	"blankSpace": doc.blankSpace
    	
    });
  }
};