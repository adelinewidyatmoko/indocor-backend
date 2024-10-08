const mongoose = require('mongoose');

const uri = process.env.DATABASE_URI || 'mongodb://iccp:iccpform@mongo:27017/indocor-database?authSource=admin&directConnection=true&authMechanism=DEFAULT';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    process.exit(0);
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  });
