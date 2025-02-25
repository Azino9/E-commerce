const express = require('express');
const app = express();
const cors = require('cors');
const chalk = require('chalk');
const port = process.env.port || 9900;
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.get('/', (req,res) => {
    res.send("Done Follow-Along Milestone-2");
})

app.listen(port, ( ) => {
    console.log(chalk.blue(`Server is Running Successfully at http://localhost:${port}`));
})