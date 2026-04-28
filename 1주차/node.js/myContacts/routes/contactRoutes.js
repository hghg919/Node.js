const express = require("express");
const router = express.Router();
const {getAllContacts, createContact,getContact,updateContact,deleteContact,addContactFrom} = require("../controllers/contactController");

router
.route("/")
.get(getAllContacts)
.post(createContact);

router
.route("/add")
.get(addContactFrom);

router
.route("/:id")
.get(getContact)
.post(updateContact)
.delete(deleteContact);

module.exports = router;