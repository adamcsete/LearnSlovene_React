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
app.get('/dictionary/:word', (req, res) => {
        let sql = `SELECT * FROM learnslovene.dictionary WHERE SLOword = ${req.params.word};`;
        return con.query(sql, (err, result) =>   {
            //res.send(result)
            console.log(result);
        }) 
   
})

app.listen(8080, err => {
    if (err) throw err;
    console.log('Server running, listening on 8080')
})