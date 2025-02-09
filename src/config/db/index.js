const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/education_dev_db');
    console.log("Connect successfuly!!!");
    
  } catch (error) {
    console.log("Connect failed!!!");
    
  }
}

module.exports = { connect };