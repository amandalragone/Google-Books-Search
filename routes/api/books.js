const router = require("express").Router();
const axios = require("axios");
require("dotenv").config();

var keys = require("../../keys");

router.get("/search/:title", function(req, res) {  
  
  axios.get("https://www.googleapis.com/books/v1/volumes?q=" + req.params.title + "&key=" + keys.books.id).then(response => {
  
  console.log(response.data.items[0])
  res.json(response.data.items)
})
  
  });

module.exports = router;
