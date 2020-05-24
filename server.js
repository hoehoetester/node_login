require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 5000;
const connectDB = require('./db');

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

app.get('/api', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () =>
  console.log(
    `🚀 🚀 🚀 Server listening on port: ${PORT}. http://localhost:${PORT}/`
  )
);
