const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root123',
  database: 'easybanking',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ', err);
    return;
  }
  console.log('Connected to database');
});

app.post('/register', (req, res) => {
    const { firstName, lastName, email, password, ssn, address } = req.body;    
    const sql = 'INSERT INTO users (email, password, firstname, lastname, ssn, address) VALUES (?, ?, ?, ?, ?, ?)';
    connection.query(sql, [email, password, firstName, lastName, ssn, address], (err, result) => {
      if (err) {
        console.error('Error registering user: ', err);
        res.status(500).send('Registration failed');
        return;
      }
      console.log('Registered user with id: ', result.insertId);
      res.send('Registration successful!');
    });
  });

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
  connection.query(sql, [email, password], (err, result) => {
    if (err) {
      console.error('Error logging in: ', err);
      res.status(500).send('Login failed');
      return;
    }
    if (result.length === 0) {
      res.status(401).send('Invalid email or password');
      return;
    }
    console.log('User logged in: ', result[0].id);
    res.send('Login successful!');
 
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

