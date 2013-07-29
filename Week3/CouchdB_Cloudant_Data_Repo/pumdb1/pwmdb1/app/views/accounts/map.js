function (doc) {
  if (doc._id.substr(0, 9) === "password:") {
    emit(doc._id);
  }
};