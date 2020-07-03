const express = require('express');
const app = express();
const controller=require("../controller/controller")
const mongoose=require("mongoose")

app.use(express.json());
app.use(express.urlencoded({extended:false}))
mongoose.connect('mongodb+srv://ambesh123:ambesh123@test.0bjgc.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.on('error', error => console.log(error));
app.get('/', (req, res) => {
   res.status(200).send('hello world!');
});


app.get('/time', (req, res) => {
   let timeNow = Date(Date.now());
   res.status(200).send(timeNow.toString());
});


app.post('/logthis', (req, res) => {
   const name = req.body.name;
   const toLog = `\n >>> My name is ${name} <<< \n`
   console.info(toLog)
   res.status(200).send(toLog);
});
app.post("/create",controller.createMongodb)
app.post("/read",controller.readMongodb)
app.post("/readAll",controller.readAllMongodb)
// app.post("/delete",controller.deleteMongodb)

module.exports = app;