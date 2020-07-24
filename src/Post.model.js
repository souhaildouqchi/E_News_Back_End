const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    //unique: true, // should this be used ?
    //required: true, // and this?
  },
  img: {
    type: String,
    //required:true,
  },

  link: {
    type: String,
  },
  content: {
    type: String,
  },

  category: {
    type: String,
  },
  excerpt: {
    type: String,
  },
  author: {
    type: String,
  },
});
// Model represents the collection in the data base
// post will be a collection in the db

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
// post will get plurised so articles is the collection
