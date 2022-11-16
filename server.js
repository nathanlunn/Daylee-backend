const express =  require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 8000;

const userRouter = require('./routes/user-router.js');
const postRouter = require('./routes/post-router.js');

app.use('/users', userRouter);
app.use('/posts', postRouter)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})