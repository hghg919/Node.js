const express = require("express");
// const errorhandler = require("./middlewares/errorhandler");
// const path = require("path");
const app = express();
// const router = express.Router();

const port = 3000;

// const requestTime = (req, res, next) => {
//     let today = new Date();
//     let now = today.toLocaleTimeString();
//     req.requestTime = now;
//     next();
// };

// app.use(requestTime);

// app.get("/", (req, res) => {
//     const responseText = `Hello Node! \n요청 시간 : ${req.requestTime}`;
//     res.set("Content-type", "text/plain");
//     res.send(responseText);
// });

// const logger = (req, res, next) => {
//     console.log("User Logged");
//     next();
// };

app.get("/", (req,res) => {
    res.status(200).send("Hello Node!");
})

// app.use(logger);

// app.use(router);
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/contacts", require("./routes/contactRoutes"));

// app.get("/test", (req, res, next) => {
//     const error = new Error("테스트용 에러");
//     error.status = 401;
//     next(error);
// });

// app.use(errorhandler);

app.listen(port, () => {
    console.log(`${port}번 포트에서 서버 실행 중`);
});

// app.get("/", (req, res) => {
//     // res.status(200);
//     // res.send("Hello Node!");
//     // const headers = req.headers;
//     // res.send(headers);
//     res.status(200);
//     res.json({message: "Hello Node!"});
// });

// app.get("/contacts", (req, res) => {
//     // res.status(200).send("Contacts Page");
//     res.sendFile(__dirname + "/assets/contacts.html");
// });

// app.post("/contacts", (req, res) => {
//     res.status(201).send("Create Contacts");
// });

// app.get("/contacts/:id", (req,res) => {
//     res.status(200).send(`View contact for ID: ${req.params.id}`);
// });

// app.put("/contacts/:id", (req,res) => {
//     res.status(200).send(`Update contact for ID: ${req.params.id}`);
// });

// app.delete("/contacts/:id", (req,res) => {
//     res.status(200).send(`Delete contact for ID: ${req.params.id}`);
// });

// app.listen(port, () => {
//     console.log(`${port}번 포트에서 서버 실행 중`);
// });