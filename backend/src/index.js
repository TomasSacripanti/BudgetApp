const express = require('express');
const app = express();
const cors = require('cors');
require('./database.js');
require('dotenv').config();
const { PORT }= process.env;

//Middlewares
app.use(cors());
app.use(express.json());


//Routes
// app.use('/budgets')


//Server
app.listen(PORT, () => { 
    console.log(`Server listening at port ${PORT}`);
});