const express = require ('express');
const app = express();
const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "CRUDReact"
});

db.connect(function(err){
    if(err) throw err;
    console.log("connected!");
});



app.get("/", (req, res) =>{

    const sqlInsert = "SELECT * FROM 'reviewtable';"
    db.query(sqlInsert,(err, result)=> {
        res.send(result);
    })
});

   

app.listen(3001, () => {
    console.log("running on port 3001");
});