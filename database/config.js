const mongoose = require('mongoose');

const { MONGODB_CONNECT } = process.env;

const dbConnection = async () => {
  try {
    // Connect to the MongoDB cluster
    await mongoose.connect(
      MONGODB_CONNECT,
      { useNewUrlParser: true, useUnifiedTopology: true },
    );
    console.log('Database is online');
  } catch (error) {
    console.log('Could not connect', error);
    throw new Error('Could not connect to database');
  }
};

module.exports = dbConnection;
