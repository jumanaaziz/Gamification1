const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  servename: {
    type: String,
    required: true


  },
  des: {
    type: String,
    required: true


  },
  img: {
    type: String,
    required: true


  },
  lnk: {
    type: String,
    required: true


  },
  




  
});

const Service = new mongoose.model('data1', serviceSchema);

module.exports = Service;

  //created_at:  { type: String, required: true },
