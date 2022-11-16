const express = require('express');
const router = express.Router();

const post = {
  description: "this is a test of a post"
}

router.get('/', (req, res) => {
  res.send(post)
})

module.exports = router;