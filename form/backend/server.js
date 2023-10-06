const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
 
const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',  
    password: '',  
    database: 'signup'  
});


app.post('/Signup', (req, res) => {
    const sql = "INSERT INTO Login (`Name`, `Email`, `Password`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ];

    db.query(sql , [values], (err,data) =>{
        if(err) return res.json(err);
        return res.json(data);
    })
});

app.post('/login', (req, res) => {
    const sql = "SELECT * from login where `email`=? AND `password`=?";
    db.query(sql , [req.body.email, req.body.password], (err,data) =>{
        if(err) {
            return res.json(err);
        }
        if(data.length > 0)
        {
       return res.json("success");
        }
        else{
            return res.json("failed");
        }
    })
});

app.listen(8081, () => {
    console.log("Yes, I am listening");
});
