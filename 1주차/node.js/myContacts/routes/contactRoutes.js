const express = require("express");
const router = express.Router();

router
.route("/")
.get((req, res) => {
    res.status(200).send("Contacts Page");
})
.post((req, res) => {
    console.log(req.body);
    const {name, email, phone} = req.body;
    if (!name || !email || !phone){
        return res.status(400).send("필수값이 입력되지 않앗습니다.")
    }
    res.status(201).send("Create Contacts");
});

router
.route("/:id")
.get((req, res) => {
    res.status(200).send(`View contact for ID: ${req.params.id}`);
})
.put((req, res) => {
    res.status(200).send(`Update contact for ID: ${req.params.id}`);
})
.delete((req, res) => {
    res.status(200).send(`Delete contact for ID: ${req.params.id}`);
})

module.exports = router;