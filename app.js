'use strict'

const express = require('express');
const mysql = require('mysql')

let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1234',
  database : 'classicmodels'
});

connection.connect();

let app = express();

app.get('/all', (req, res) => {
  connection.query('SELECT * FROM employees', function (error, results, fields) {
    if (error) throw error;
    // for (let employee in results) {
    //   console.log(results[employee].firstName);
    // }
    res.send(results);
  });
})

app.listen(3000)
