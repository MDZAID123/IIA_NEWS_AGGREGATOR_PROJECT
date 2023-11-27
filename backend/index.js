// here in the index.js we will be creating our express application

import cors from "cors";

import express from "express";
const app=express()

import mysql from "mysql";

// finally to run our application we have to listen on a specific port number
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Happu@7869",
    database:"final_db_v1"
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

app.get("/news",(req,res)=>{
    const q="SELECT * FROM global_view as t INNER JOIN (SELECT category, MAX(date) as max_date FROM global_view GROUP BY category) subq ON t.category = subq.category AND t.date = subq.max_date;"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})
app.get("/news/general",(req,res)=>{
    const q="SELECT * FROM global_view where image IS NOT NULL UNION ALL SELECT * FROM global_view WHERE image IS NULL;"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})


app.get("/news/science", (req, res) => {
    const q = "SELECT * FROM global_view WHERE category='science'";
    db.query(q, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    });
 });

app.get("/news/sports", (req, res) => {
    const q = "SELECT * FROM global_view WHERE category='sports'";
    db.query(q, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    });
 });

app.get("/news/business", (req, res) => {
    const q = "SELECT * FROM global_view WHERE category='business'";
    db.query(q, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    });
 });

app.get("/news/entertainment", (req, res) => {
    const q = "SELECT * FROM global_view WHERE category='entertainment'";
    db.query(q, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    });
 });
 app.get("/news/search", (req, res) => {
    const { query } = req.query;

    // Use parameterized query to prevent SQL injection
    const q = "SELECT * FROM global_view WHERE title LIKE ?";
    
    // Execute the SQL query with the parameter
    db.query(q, [`%${query}%`], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

//returning our news parteners

 app.get("/news/partners", (req, res) => {
    // const { query } = req.query;s

    // Use parameterized query to prevent SQL injection
    const q = "SELECT distinct(source), COUNT(*) as frequency FROM global_View GROUP BY source ORDER BY frequency desc";
    
    // Execute the SQL query with the parameter
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

 


// app.post("/books",(req,res)=>{
//     console.log(req.body)
//     const q="INSERT INTO books (`title`,`desc`,`price`,`cover`) VALUES (?)";
//     const values=[req.body.title,
//     req.body.desc,
//     res.body.price,
//     req.body.cover,]
//     db.query(q,[values],(err,data)=>{
//         if(err) return res.json(err)
//         return res.json("Book has been created.");

//     })
// })
//an error occured by default we cannot send data to our express server


app.listen(8800,()=>{
    console.log("connected to backend!")
    
})