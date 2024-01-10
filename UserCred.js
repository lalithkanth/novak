const express = require('express');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 3000;

const pool = mysql.createPool({
  host: 'andreja.rs',
  user: 'andrejar',
  password: 'uGzC0802',
  database: 'andrejar_b2bbaza',
  connectionLimit: 10,
});

app.get('/retrieveUsers', (req, res) => {
  const queryString = 'SELECT * FROM andrejar_b2bbaza.users';

  pool.query(queryString, (error, results) => {
    if (error) {
      console.error('Error retrieving data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

app.get('/retrieveItems', (req, res) => {
  const queryString = 'SELECT * FROM andrejar_b2bbaza.roba';

  pool.query(queryString, (error, results) => {
    if (error) {
      console.error('Error retrieving data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

app.get('/retrieveAddress', (req, res) => {
  const queryString = 'SELECT * FROM andrejar_b2bbaza.KOMINT_DBF';

  pool.query(queryString, (error, results) => {
    if (error) {
      console.error('Error retrieving data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  
});
