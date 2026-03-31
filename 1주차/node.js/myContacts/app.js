const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    // res.status(200);
    // res.send("Hello Node!");
    // const headers = req.headers;
    // res.send(headers);
    res.status(200);
    res.json({message: "Hello Node!"});
});

app.get("/contacts", (req, res) => {
    // res.status(200).send("Contacts Page");
    res.sendFile(__dirname + "/assets/contacts.html");
});

app.post("/contacts", (req, res) => {
    res.status(201).send("Create Contacts");
});

app.get("/contacts/:id", (req,res) => {
    res.status(200).send(`View contact for ID: ${req.params.id}`);
});

app.put("/contacts/:id", (req,res) => {
    res.status(200).send(`Update contact for ID: ${req.params.id}`);
});

app.delete("/contacts/:id", (req,res) => {
    res.status(200).send(`Delete contact for ID: ${req.params.id}`);
});

app.listen(port, () => {
    console.log(`${port}번 포트에서 서버 실행 중`);
});