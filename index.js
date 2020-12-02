const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan')
const bodyParser = require('body-parser');

require('./models/index')

mongoose.connect(keys.mongoURI, { useMongoClient: true })
  .then(() => console.log('Database connected successfully...'))
  .catch((e) => console.log('err in connecting db: ', e))

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', require('./routes/route'))

app.use(morgan('dev', {
    skip: function (req, res) { return res.statusCode < 400 }
  }))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});