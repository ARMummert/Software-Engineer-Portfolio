const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432, // Ensure this is set correctly
});

// CORS configuration
const corsOptions = {
    origin: ['http://localhost:3000', 'http://localhost:5432', 'http://localhost:3001'], 
  };

// Use CORS middleware
app.use(cors(corsOptions));

// Test database connection
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  console.log('Connected to the database');
  release();
});

app.get('/api/projects', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM projects'); // Adjust the query as needed
      const data = result.rows;
      client.release();
      res.json(data);
    } catch (err) {
      console.error('Error fetching data', err);
      res.status(500).send('Error fetching data');
    }
  });
  
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});