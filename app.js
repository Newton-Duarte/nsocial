const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

// Import Routes
const postsRoute = require('./routes/posts');

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/posts', postsRoute);

app.get('/', (req, res) => res.send('<h1>Hello, nsocial!</h1>'));

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION, 
  { useNewUrlParser: true }, 
  () => console.log('Connect to DB.')
);

app.listen(3000, () => console.log('Server is running on port 3000.'));