const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser");
const checkLogin = require("../middlewares/checkLogin");
const {getAllContacts, createContact,getContact,updateContact,deleteContact,addContactFrom} = require("../controllers/contactController");

router.use(cookieParser());

router
.route("/")
.get(checkLogin, getAllContacts);

router
.route("/add")
.get(checkLogin, addContactFrom)
.post(checkLogin, createContact);

router
.route("/:id")
.get(checkLogin, getContact)
.post(checkLogin, updateContact)
.delete(checkLogin, deleteContact);

module.exports = router;