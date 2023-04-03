function strangeParam({ strictFalse = false } = {}) {
  console.log(strictFalse);
}

strangeParam({ strictFalse: "bianca" }); // bianca
strangeParam({ strictFalse: true }); // true
strangeParam({ strictFalse: undefined }); // false
strangeParam({}); // false
strangeParam(); // false
