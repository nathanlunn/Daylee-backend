const express = require('express');
const router = express.Router();
const db = require('../configs/db.js');

router.get('/comments/:id', (req, res) => {
  const topicID = req.params.id;

  if(topicID === undefined) {
    return;
  }

  db.query('SELECT * FROM comments WHERE topic_id = $1', [topicID])
    .then(data => {
      res.send(data.rows);
    })
    .catch(err => {
      console.error(err.message);
    })
})

router.post('/today', (req, res) => {
  const dateToday = req.body.today;
  db.query('SELECT * FROM topics;')
    .then(data => {
      const topics = data.rows;
      const topicToday = topics.find(topic => {
        if (topic.date_created.toString().slice(0,15) === dateToday) {
          return topic;
        };
      })
      res.send(topicToday);
    })
    .catch(err => {
      console.error(err.message);
    })
})

router.post('/comments/add', (req, res) => {
  const userID = req.body.userID;
  const topicID = req.body.topicID;
  const comment = req.body.comment;

  db.query('INSERT INTO comments (user_id, topic_id, content) VALUES ($1, $2, $3) RETURNING *', [userID, topicID, comment])
    .then(data => {
      res.send(data.rows[0]);
    })
    .catch(err => {
      console.error(err.message);
    })
})

router.post('/commentSearch', (req, res) => {
  const userID = req.body.userID;
  const topicID = req.body.topicID;

  db.query('SELECT * FROM comments WHERE user_id = $1 AND topic_id = $2;', [userID, topicID])
    .then(data => {
      res.send(data.rows);
    })
    .catch(err => {
      console.error(err.message);
    })
})

module.exports = router;