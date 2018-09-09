const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const customers = require('./routes/api/customers');

const app = express();

app.use(express.json());

// DB Configs

const db = require('./config/keys').mongoURI;

//Use Routes

app.use('/api/customers', customers);

app.get('/api/staticcustomers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
  ];

  res.json(customers);
});

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Sever started on port ${port}`));