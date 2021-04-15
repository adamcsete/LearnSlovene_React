const mysql = require('mysql');
const express = require("express");
const app = express();

//parameters
const mysqlhost = "172.25.54.240";
const mysqlport = 3306;
const mysqluser = "admin";
const mysqlpassword = "1234";

//creating mysql connection and executing queries
const con = mysql.createConnection({
  host: mysqlhost,
  port : mysqlport,
  user: mysqluser,
  password: mysqlpassword,
});

con.connect((err, res) => {
    if (err) throw err;
});

//handling root
app.get('/', (req, res) => {
    res.send('Server is up')
})

//getting word from dictionary
app.get('/dictionary/slo/:word', (req, res) => {
        let sql = `SELECT * FROM learnslovene.dictionary WHERE SLOword LIKE '%${req.params.word}%';`;
        return con.query(sql, (err, result) =>   {
            if (!(result.length > 0)) {
                res.send("Nincs találat");
            } 
            else {
                res.send(result[0].HUNword);
            }
        }) 
})

app.get('/dictionary/hun/:word', (req, res) => {
    let sql = `SELECT * FROM learnslovene.dictionary WHERE HUNword LIKE '%${req.params.word}%';`;
    return con.query(sql, (err, result) =>   {
        if (!(result.length > 0)) {
            res.send("Nincs találat");
        } 
        else {
            res.send(result[0].SLOword);
        }
    }) 

})

app.listen(8080, err => {
    if (err) throw err;
    console.log('Server running, listening on 8080')
})