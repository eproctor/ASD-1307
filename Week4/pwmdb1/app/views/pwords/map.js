function (doc) {
  if (doc._id.substr(0,17)==="password:account:") {
    emit(doc._id.substr(17), {
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