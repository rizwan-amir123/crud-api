const express = require("express");
const router = require("./api/router");
const mongoose = require("mongoose");
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();

const PORT = 3000;
const app = express();

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
});

app.get('/', (req, res) => {
    res.send('Hey this is my API running 🥳')
})
const res = require('./api/router.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

/*
app.use('/api/', res);
app.use('/api/task', res);
app.use('/api/task/pending', res);
app.use('/api/task/late', res);
app.use('/api/task/processing', res);
app.use('/api/task/notassigned', res);
app.use('/api/task/done', res);
app.use('/api/task/:taskID', res);
*/
app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});


module.exports = app;
