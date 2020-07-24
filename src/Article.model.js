const mongoose = require("mongoose");
const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    //unique: true, // should this be used ?
    //required: true, // and this?
  },
  img: {
    type: String,
    //required:true,
  },
  excerpt: {
    type: String,
  },
  link: {
    type: String,
  },
  content: {
    type: String,
  },
});

const Article = mongoose.model("Article", articleSchema);
module.exports = Article;
