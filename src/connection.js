// connection.js
const mongoose = require("mongoose");
//const User = require("./Article.model");
const connection = "mongodb://crawlab_mongo_1:27017/crawlab_test";
const connectDb = () => {
  return mongoose.connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
};
module.exports = connectDb;
