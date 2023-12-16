const express = require('express');
const mongoDB = require('./db');
const cors = require('cors')
const app = express();
const port = 8000;
const createUser = require('./Routes/CreateUser')
const DisplayData = require('./Routes/DisplayData')
const OrderData = require('./Routes/OrderData')

app.use(cors());

mongoDB();

app.use(express.json());

app.use('/api',createUser)
app.use('/api',DisplayData)
app.use('/api',OrderData)
app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
})