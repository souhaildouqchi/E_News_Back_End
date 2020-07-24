// server.js
const Article = require("./src/Article.model");
const Post = require("./src/Post.model");
const express = require("express");
const app = express();
const connectDb = require("./src/connection");
const PORT = 5001;
// server.js
app.get("/articles", async (req, res, next) => {
  try {
    //aritcles with null values
    const articles = await Article.find();
    const articlesResponse = articles.filter((item) => {
      let isValidObject = true; // item is an article  it has title img excerpt keys
      if (
        !item.excerpt ||
        !item.img ||
        !item.title ||
        !item.link ||
        !item.content
      )
        isValidObject = false;
      return isValidObject;
    });
    res.json(articlesResponse);
    //res.json(articles);
  } catch (err) {
    return res.status(422).send(err.message);
  }
});
app.get("/posts", async (req, res, next) => {
  try {
    //posts with null values

    const posts = await Post.find();
    const postsResponse = posts.filter((item) => {
      let isValidObject = true;
      if (
        !item.category ||
        !item.img ||
        !item.title ||
        !item.link ||
        !item.content
      )
        isValidObject = false;
      return isValidObject;
    });
    res.json(postsResponse);
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

app.listen(PORT, function () {
  console.log(`Listening on ${PORT}`);
  connectDb().then(() => {
    console.log("MongoDb connected");
  });
});
