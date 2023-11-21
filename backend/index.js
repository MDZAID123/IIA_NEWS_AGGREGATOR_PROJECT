// here in the index.js we will be creating our express application

import cors from "cors";

import express from "express";
const app=express()

import mysql from "mysql";

// finally to run our application we have to listen on a specific port number
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"examination123",
    database:"test"
})

//how we can reach our backend server

// const cors=require('cors');
//if there is an auth
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'examination123';
app.use(express.json())
app.use(cors())
//it allows us to send any json file using a client 

app.get("/",(req,res)=>{
    res.json("hello this is the backend")

})

app.get("/books",(req,res)=>{
    const q="SELECT * FROM global_view"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})


app.post("/books",(req,res)=>{
    console.log(req.body)
    const q="INSERT INTO books (`title`,`desc`,`price`,`cover`) VALUES (?)";
    const values=[req.body.title,
    req.body.desc,
    res.body.price,
    req.body.cover,]
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("Book has been created.");

    })
})
//an error occured by default we cannot send data to our express server


app.listen(8800,()=>{
    console.log("connected to backend!")
    
})