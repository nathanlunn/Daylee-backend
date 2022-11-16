const express =  require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

const userRouter = require('./routes/user-router.js');
const postRouter = require('./routes/post-router.js');

app.use('/users', userRouter);
app.use('/posts', postRouter)

app.listen(8000)