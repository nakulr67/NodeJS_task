const express = require('express');
const dotenv = require('dotenv');
const {db} = require('./config/database.js');

const taskRouter = require('./routes/task.routes.js')

const app = express();
dotenv.config();

app.use(express.json());
app.use("/task", taskRouter);
const port = process.env.PORT || 3000;

  // Start the server
  app.listen(port, () => {
    db(); // connect database
    console.log(`Server is running on http://localhost:${port}`);
  });