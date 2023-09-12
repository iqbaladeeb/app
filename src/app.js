const express = require("express");
require('./db/conn');
const User = require("./models/usermessage");
const path = require('path');
const app = express();
const port = 3000;
const hbs = require('hbs');


//middleware
app.use(express.static(path.join(__dirname,'../public'))),
app.use(express.urlencoded({extended:false}));
//set view engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../templates/views'));
hbs.registerPartials(path.join(__dirname, '../templates/partials'));


app.get("/" ,(req,res)=>{
    res.render("index.hbs");
});

app.post("/contact", async(req,res) =>{
     try {
        // res.send(req.body);
        const userData = new User(req.body);
        await userData.save();
        res.status(201).render("index");
     } catch (error) {
        res.status(500).send(error);
     }
});

app.listen(port,()=>{
    console.log(`listen the port ${port}`);
});